function rgb(r, g, b) {
  const fitToRange = (x) => {
    if (x < 0) {
      return 0;
    }
    if (x > 255) {
      return 255;
    }
    return x;
  };
  r = fitToRange(r);
  g = fitToRange(g);
  b = fitToRange(b);
  let output = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return output.toUpperCase();
}
