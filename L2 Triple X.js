function tripleX(str) {
  const x = str.search("x");
  const xxx = str.search("xxx");
  if (x >= 0 && x === xxx) return true;
  return false;
}
