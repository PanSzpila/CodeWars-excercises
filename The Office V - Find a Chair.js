console.log(
  meeting(
    [
      ["XXXXX", 2],
      ["X", 5],
      ["XXXX", 4],
      ["XX", 7],
      ["XXX", 2],
      ["XXXXX", 5],
      ["XXXXX", 3],
      ["XXXXXX", 4],
      ["XXXX", 5],
      ["XXX", 2],
    ],
    7
  )
);

function meeting(x, need) {
  if (need === 0) return "Game On";
  let output = [];
  for (let i = 0; i < x.length; i++) {
    const free = x[i][1] - x[i][0].length;
    const take = Math.max(free, 0)
    if (take < need) {
      need -= take;
      output.push(take);
    }
    else {
      output.push(need);
      return output;
    }
  };
  return "Not enough!";
};
