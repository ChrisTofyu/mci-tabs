export const parseAspectRatio = (str: string) => {
  if (!str || !str.includes(':')) return 0;
  const [w, h] = str.split(':').map(Number);
  if (!w || !h) return 0;
  return w / h;
};
