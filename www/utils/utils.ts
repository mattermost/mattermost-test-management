export function removeFromLast(path: string, key: string) {
  if (!path) return path;
  const i = path.lastIndexOf(key);
  return i === -1 ? path : path.substring(0, i);
}
