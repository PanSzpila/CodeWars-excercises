function digits(num) {
    num = num.toString();
  let output = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      output.push(parseInt(num.charAt(i)) + parseInt(num.charAt(j)));
    }
  }
  return output;
}
console.log(digits(1468));