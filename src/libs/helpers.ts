export function sizeThumbnail(total: number, width: number, height: number) {
  let ratio = height / width;
  if (total < 1 / ratio) {
    return Math.min(128, Math.max(32, height / total));
  }

  let n = Math.sqrt(total * ratio);

  let r = Math.ceil(n);
  let s = Math.ceil(r / ratio);

  let o = Math.floor(n);
  let l = Math.ceil(total / o);

  return Math.min(128, Math.max(32, width / Math.min(s, l)));
}
