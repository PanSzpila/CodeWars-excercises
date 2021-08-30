const flip = (d, a) => {
  if (d === 'L') {
    return a.sort((a, b) => {
      return b - a;
    });
  }
  return a.sort((a, b) => {
    return a - b;
  });
};

console.log(flip('R', [3, 2, 1, 2]))