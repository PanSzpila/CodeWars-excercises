/*function arrayDiff(a, b) {
    console.log("function started");
    if(a === [] || b === []) return a;
    for (let j = 0; j < b.length; j++) {
      for (let i = 0; i < a.length; i++) {
          console.log(a, b, a[i], b[j]);
        if ( a[i] === b(j)) { 
          a.splice(i, 1); 
          console.log(a);
        }   
      }
    }
  }
*/

function arrayDiff(a, b) {
  for (let i = a.length - 1; i >= 0; i--) {
    console.log(i, a[i]);
    if (b.includes(a[i]) === true) {
      a.splice(i, 1);
      console.log(`splicing ${i}-th element of an "a"`);
    }
  }
  return a;
}

let a = [1, 2, 3];
let b = [3, 1];
console.log(arrayDiff(a, b));
/*
const tests = [
{ testArrayA: [], TestArrayB: [4,5], expectedResult: [] },
{ testArrayA: [3,4], TestArrayB: [3], expectedResult: [4] },
{ testArrayA: [1,8,2], TestArrayB: [], expectedResult: [1,8,2] },
{ testArrayA: [1,2,3], TestArrayB: [1,2], expectedResult: [3] },
];

function test(tests) {
for (let i = 0; i < tests.length; i++) {
    if (arrayDiff(tests[i].testArrayA, testArrayB) != tests[i].expectedResult) {
    return `test failed at ${i}-th element`;
    }
}
return "test succesful";
}

console.log(test(tests));

/*

  describe("Sample tests", function() {
    it("Should pass Sample tests", function() {
      Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
      Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
      Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
      Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
    });
  }); 
  */
