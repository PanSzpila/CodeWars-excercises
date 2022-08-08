function josephus(items, k) {
  if (items.length <= 2) return items;
  let count = 0;
  let output = [];
  for (let i = 1; i <= items.length; i++) {
    count++;
    if (count % k === 0) {
      output.push(items[i - 1]);
      items.splice(i - 1, 1);
      i--;
    }
    if (i === items.length) i = 0;
    if (items.length === 1) return output.concat(items);
    if (count >= 1000) return ["infinite loop error"]; //prevent infinite loop
  }
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));
