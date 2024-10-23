import { ensureFileSync } from '@std/fs';

export function writeFile(path: string, data: string): string {
  try {
    ensureFileSync(path);
    Deno.writeTextFileSync(path, data);

    return 'Done writing to ' + path;
  } catch (e) {
    // Log info
    console.log(`Error writing to a file: ${path} --> ${e}`);
    return e.message;
  }
}

export function readFile(path: string, silent = false) {
  try {
    const data = Deno.readTextFileSync(path);
    return JSON.parse(data);
  } catch (e) {
    // Log for info
    if (!silent) {
      console.log(`File not found: ${path} --> ${e}`);
    }

    return null;
  }
}
