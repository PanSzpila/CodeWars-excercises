function moveZeros(arr) {
  let zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(i);
      arr.splice(i, 1);
      zeros.push(0);
      i--;
    }
  }
  console.log(arr, zeros);
  return arr.concat(zeros);
}
moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
