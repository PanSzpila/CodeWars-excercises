function hexStringToRGB(hexString) {
  hexString = hexString.substring(1);
  const bigint = parseInt(hexString, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r: r, g: g, b: b };
}
