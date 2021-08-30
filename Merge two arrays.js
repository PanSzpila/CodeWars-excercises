function mergeArrays(a, b) {
  const smallLength = a.length >= b.length ? b.length : a.length;
  let output = [];
  for (let i = 0; i < smallLength * 2; i++) {
    if (i % 2 === 0) {
      output.push(a[0]);
      a.shift();
    } else {
      output.push(b[0]);
      b.shift();
    }
  }
  output = output.concat(a, b);
  return output;
}
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]));
