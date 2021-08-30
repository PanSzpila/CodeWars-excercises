function filterHomogenous(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] === "undefined") {
      console.log(i, arrays[i]);
      arrays.splice(i, 1);
      i--;
    } else if (arrays[i].length === 0) {
      console.log(i + "splicing" + arrays[i]);
      arrays.splice(i, 1);
      i--;
    } else {
      for (let j = 1; j < arrays[i].length; j++) {
        if (typeof arrays[i][j] !== typeof arrays[i][j - 1]) {
          arrays.splice(i, 1);
          i--;
        }
      }
    }
  }
  return arrays;
}

console.log(filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]));
