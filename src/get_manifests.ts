// deno run --allow-run --allow-read=. --allow-write=. --allow-env src/get_manifests.ts

import { sortBy } from 'https://deno.land/std@0.154.0/collections/sort_by.ts';
import { findSingle, walkSync } from './deps.ts';

import { dataFolderPath, testCasesFolderFullPath } from './util/constant.ts';
import { readFile, writeFile } from './util/file.ts';
import { markdownToTestCase } from './util/markdown.ts';
import { Folder } from './util/types.ts';

interface Route {
  key?: string | null;
  name?: string | null;
  path?: string;
  parentPath?: string | null;
  file?: string | null;
  routes?: Route[] | null;
}

const folders = readFile(`${dataFolderPath}/folders.json`) as Folder[];
const { routes, slugs, toc } = getTestsAndFolders(folders);
const sortedTestsAndFolders = sortBy(routes, (it) => it.path || '');
const manifest = listToTree(sortedTestsAndFolders);

// Save manifest to file
console.log(
  writeFile(
    `${dataFolderPath}/test-cases-manifest.json`,
    JSON.stringify(manifest),
  ),
);

// Save slugs to file
console.log(
  writeFile(
    `${dataFolderPath}/test-cases-slugs.json`,
    JSON.stringify(sortBy(slugs, (it) => it)),
  ),
);

// Save TOC to file
console.log(
  writeFile(`${dataFolderPath}/test-cases-toc.json`, JSON.stringify(toc)),
);

// Save folder slug
console.log(
  writeFile(
    `${dataFolderPath}/test-cases-folders.json`,
    JSON.stringify(folders.reduce<Record<string, string>>((acc, folder) => {
      if (folder.fullPath && folder.name) {
        acc[folder.fullPath] = folder.name;
      }
      return acc;
    }, {})),
  ),
);

function listToTree(list: Route[]) {
  const map: Record<string, number> = {};
  const roots = [];

  for (let i = 0; i < list.length; i += 1) {
    // initialize the routes
    const route = list[i];
    if (route?.path) {
      map[route.path] = i;
      if (!route.file) {
        list[i].routes = [];
      }
    }
  }

  for (let i = 0; i < list.length; i += 1) {
    const node = list[i];
    if (!node.name) continue;

    if (node.parentPath) {
      const parentPath = node.parentPath;

      delete node.parentPath;
      if (!node.path?.includes('.md')) {
        delete node.path;
      }

      list[map[parentPath]].routes?.push(node);
    } else {
      roots.push({ name: node.name, heading: true, routes: node.routes });
    }
  }
  return roots;
}

function getTestsAndFolders(folders: Folder[]) {
  const routes: Route[] = [];
  const slugs = [];
  const toc: Record<string, { name: string; slug: string }> = {};

  for (const entry of walkSync(testCasesFolderFullPath)) {
    if (entry.isSymlink) continue;
    if (entry.isFile) {
      if (entry.path.includes(`.md`)) {
        const testCase = markdownToTestCase(entry.path);
        const { key, name, folderFullPath } = testCase;
        const path = `${folderFullPath}/${key.toLowerCase()}`;
        const file = `${folderFullPath}/${key}.md`;

        routes.push({
          name,
          path,
          parentPath: folderFullPath,
          file,
        });
        slugs.push(path);
        toc[path] = { name, slug: path };
      }
    } else if (entry.isDirectory) {
      const folder = findSingle(
        folders,
        (it) =>
          it.fullPath ===
            entry.path.substring(testCasesFolderFullPath.length + 1),
      );
      const parts = folder?.fullPath?.split('/');
      parts?.pop();
      routes.push({
        name: folder?.name,
        path: folder?.fullPath,
        parentPath: parts?.join('/'),
      });
    }
  }

  return { routes, slugs, toc };
}
