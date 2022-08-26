import { ensureFileSync } from '../deps.ts';

export function writeFile(path: string, data: string): string {
  try {
    ensureFileSync(path);
    Deno.writeTextFileSync(path, data);

    return 'Done writing to ' + path;
  } catch (e) {
    return e.message;
  }
}

export function readFile(path: string) {
  try {
    const data = Deno.readTextFileSync(path);
    return JSON.parse(data);
  } catch (e) {
    // Log for info
    console.log(`File not found: ${path} --> ${e}`);
    return [];
  }
}
