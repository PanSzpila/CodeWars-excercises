//This excercise is not uploaded because codewars are not compatible with ES2022. It works in chrome, but not on codewars. New methot: "arr.at(x)"

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);

snailES2020 = function (input) {
  let output = [];

  const moveRight = (input) => {
    output = output.concat(input[0]);
    input.shift();
  };

  const moveDown = (input) => {
    for (let i = 0; i < input.length; i++) {
      output.push(input[i].at(-1));
      input[i].pop();
    }
  };

  const moveLeft = (input) => {
    console.log(input);
    output = output.concat(input.at(-1).reverse());
    input.pop();
  };

  const moveUp = (input) => {
    for (let i = input.length - 1; i >= 0; i--) {
      output.push(input[i].at(0));
      input[i].shift();
    }
  };

  for (let i = 0; input.length !== 0; i++) {
    moveRight(input);
    moveDown(input);
    moveLeft(input);
    moveUp(input);
  }

  return output;
};
