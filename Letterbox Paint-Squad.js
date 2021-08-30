var paintLetterboxes = function (start, end) {
  let houses = "";
  let output = [];
  for (let i = start; i <= end; i++) {
    houses = houses.concat(i.toString());
  }
  for (let digit = 0; digit < 10; digit++) {
    let digitCount = 0;
    for (let i = 0; i < houses.length; i++) {
      if (houses.charAt(i) == digit) {
        digitCount++;
      }
    }
    output.push(digitCount);
  }
  return output;
};
