function dot(n, m) {
  let oStr = "";
  let plusStr = "";
  let outputStr = "";
  for (let i = 0; i < n; i++) {
    oStr += "| o ";
    plusStr += "+---";
  }
  plusStr += "+";
  oStr += "|";

  for (let i = 0; i < m; i++) {
    outputStr += plusStr + "\n" + oStr + "\n";
  }
  outputStr += plusStr;
  console.log(outputStr);
  return outputStr;
}

dot(14, 9);
/* 
describe("Default test cases", function () {
  it("Should work for test cases", function () {
    Test.assertEquals(
      dot(1, 1),
      "+---+\n| o |\n+---+",
      "Should look like this: " + print(1, 1)
    );
    Test.assertEquals(
      dot(3, 2),
      "+---+---+---+\n| o | o | o |\n+---+---+---+\n| o | o | o |\n+---+---+---+",
      "Should look like this: " + print(3, 2)
    );
  });
});

function print(n, m) {
  console.log(
    '<p style="color: red;">For width: ' + n + " and height: " + m + "</p>"
  );
  console.log("Your solution: ");
  console.log(dot(n, m));
}
 */
