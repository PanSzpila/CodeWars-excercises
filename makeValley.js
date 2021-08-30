function makeValley(arr) {
  if (arr.length === 2) {
    return arr.sort(function(a, b){return b-a});
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  let outA = [];
  let outB = [];
  let holeI = Math.round(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      outA.push(arr[i]);
      outB.unshift(arr[i]);
    } else {
      outA.unshift(arr[i]);
      outB.push(arr[i]);
    }
  }
  for (let i = 0; i < holeI - 1; i++) {
    if (outA[i] < outA[outA.length - 1 - i]) {
      return outB;
    }
  }
  return outA;
}

console.log(makeValley([17, 22]));

function makeValley(arr) {
  var leftWing = []
  var rightWing = []
  arr.sort((a, b) => b - a)
    .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))
  
  return [...leftWing, ...rightWing]
}