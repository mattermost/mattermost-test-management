import { crypto, path, walkSync } from '../deps.ts';

import { testCasesFolderFullPath } from './constant.ts';
import { Folder, TestCase } from './types.ts';

interface CliArgs {
  all: boolean;
}

export function getCliArgs() {
  const args: CliArgs = {
    all: false,
  };

  for (const arg of Deno.args) {
    const split = arg.split('=');
    if (split[0] === '--all') {
      args.all = true;
    }
  }
  return args;
}

export const newLineRe = /[\n\r]/gm;
const illegalRe = /[\/\?<>\\:\*\|":&();]/g;
// deno-lint-ignore no-control-regex
const controlRe = /[\x00-\x1f\x80-\x9f]/g;
const reservedRe = /^\.+$/;
const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
const emojiRe =
  /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

export function sliceIntoChunks<T>(arr: T[], chunkSize: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

// deno-lint-ignore no-explicit-any
export function wait(ms: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFolderByPath(folders: Folder[], fullPath: string) {
  if (!fullPath) {
    return null;
  }

  return folders.find((f) => f.fullPath === fullPath);
}

export function getParentFolderById(folders: Folder[], id?: number) {
  if (!id) {
    return null;
  }

  const fullNames: string[] = [];
  let folderId: number | null | undefined = id;
  let parentId: number | null | undefined;
  let root = false;
  while (!root) {
    const folder = folders.find((f) => f.id === folderId);
    if (!folder) {
      break;
    }

    if (!parentId) {
      parentId = folder.parentId;
    }

    folderId = folder?.parentId;
    fullNames.push(folder?.name || 'check_me');

    root = folder.parentId === null;
  }

  if (fullNames.length === 0) {
    return null;
  }

  fullNames.reverse();

  return {
    id,
    name: fullNames[fullNames.length - 1],
    parentId,
    fullNames,
    fullPath: fullNames.map((name) => sanitizeForSlug(name)).join('/'),
  };
}

export function sanitizeForSlug(input: string, replacement = '-') {
  return input
    .replace(illegalRe, replacement)
    .replace(controlRe, replacement)
    .replace(reservedRe, replacement)
    .replace(windowsReservedRe, replacement)
    .replace(emojiRe, '')
    .replace(/\s/g, replacement)
    .trim()
    .toLowerCase();
}

export function sanitizeName(input: string) {
  return input
    .replace(newLineRe, '(newline)')
    .replace(/ {4}|[\t]/gm, '(tab)')
    .trim();
}

export function getFiles(dir: string) {
  const files: string[] = [];
  let count = 0;

  for (const entry of walkSync(dir)) {
    if (!entry.isSymlink && entry.isFile) {
      if (entry.path.includes('.json')) {
        count++;
        files.push(entry.path);
      }

      let directory = path.dirname(entry.path).substring(dir.length);

      if (!directory) {
        directory = 'root';
      }
    }
  }

  return files;
}

export function isFolderPathValid(file: string, fullPath?: string) {
  const fileParts = file.replace(`${testCasesFolderFullPath}/`, '').split('/');
  const fileBasedFolderPath = fileParts.slice(0, fileParts.length - 1).join('/');

  if (fullPath !== fileBasedFolderPath) {
    // Log for info
    console.log(
      `! "folder.fullPath = ${fullPath}" does not match with actual file location "${
        fileParts.join('/')
      }"`,
    );
  }

  return fullPath === fileBasedFolderPath;
}

export function getHex(text: string): string {
  const bytes = crypto.subtle.digestSync('SHA-384', new TextEncoder().encode(text));
  return new Uint8Array(bytes).reduce(
    (str, byte) => str + byte.toString(16).padStart(2, '0'),
    '',
  );
}

export function getHashes(testCase: TestCase) {
  const testCaseCopy = { ...testCase };
  delete testCaseCopy.caseHashed;
  delete testCaseCopy.stepsHashed;
  delete testCaseCopy.steps;

  const caseHashed = getHex(JSON.stringify(testCaseCopy));
  const stepsHashed = testCase.steps ? getHex(JSON.stringify(testCase.steps)) : null;

  return [caseHashed, stepsHashed];
}
