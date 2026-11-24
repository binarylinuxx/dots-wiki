// The official blxshell plugin repository, read at build time: the sidebar
// (astro.config.mjs) and the per-plugin pages (src/pages/plugins/[id].astro)
// come from it. The Browse page reads the same repository live in the
// browser, so it also shows what was merged after the last build.

export const REPO = 'binarylinuxx/dots-plugins';
export const BRANCH = 'main';
export const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
export const TREE = `https://github.com/${REPO}/tree/${BRANCH}`;

let cached;

async function json(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
}

async function text(url) {
  const response = await fetch(url);
  return response.ok ? response.text() : null;
}

/**
 * Every package the repository lists, with its manifest:
 * [{ id, path, manifest, readme, views }], plugins first, each group by name.
 * Never throws: without network the wiki still builds, just without the
 * per-plugin pages (they come back on the next build).
 */
export function loadPackages() {
  cached ??= (async () => {
    try {
      const listing = await json(`${RAW}/list.json`);
      const entries = Array.isArray(listing.packages) ? listing.packages : [];
      const loaded = await Promise.all(
        entries.map(async (entry) => {
          try {
            const manifest = await json(`${RAW}/${entry.path}/manifest.json`);
            if (manifest.id !== entry.id) return null;
            const readme = await text(`${RAW}/${entry.path}/README.md`);
            // Its views, from its Facet file: "view Name(" lines.
            const facet = manifest.plugin?.facet ? await text(`${RAW}/${entry.path}/${manifest.plugin.facet}`) : null;
            const views = facet ? [...facet.matchAll(/^\s*view\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/gm)].map((m) => m[1]) : [];
            return { id: entry.id, path: entry.path, manifest, readme, views };
          } catch (error) {
            console.warn(`[plugins] skipping ${entry.id}: ${error.message}`);
            return null;
          }
        }),
      );
      return loaded
        .filter(Boolean)
        .sort((a, b) =>
          a.manifest.type === b.manifest.type
            ? a.manifest.name.localeCompare(b.manifest.name)
            : a.manifest.type === 'plugin' ? -1 : 1,
        );
    } catch (error) {
      console.warn(`[plugins] can't read ${REPO}: ${error.message}; building without plugin pages`);
      return [];
    }
  })();
  return cached;
}

/** Where a package's page lives on the wiki. */
export const pageLink = (id) => `/plugins/${id}/`;
