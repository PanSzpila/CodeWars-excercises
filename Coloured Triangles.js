/*  function triangle(row) {
  return row.length == 1 ? row : triangle(processedRow(row))
}

function processedRow(row) {
  return row.split('').map((el, i) => i == row.length-1 ? null : sumLetters(row[i], row[i+1])).join('');
}

function sumLetters(a, b) {
  switch (a+b) {
    case 'BG':
    case 'GB':
    case 'RR': return 'R'; break;
    case 'BR':
    case 'RB':
    case 'GG': return 'G'; break;
    case 'RG':
    case 'GR':
    case 'BB': return 'B'; break;
  }
} */

/* function triangle(row) {
  if (row.length === 1) return row;
  const arr = [];

  function ColorsToNumbers(row) {
    for (const color of row) {
      switch (color) {
        case "R":
          arr.push(-1);
          break;
        case "G":
          arr.push(0);
          break;
        case "B":
          arr.push(1);
          break;
      }
    }
    return;
  }

  function createNewArr(arr) {
    const newArr = [];
    function compareColors(A, B) {
      if (A === B) return A;
      if (A + B === 0) return 0;
      if (A + B === -1) return 1;
      return -1; //if (A + B === 1)
    }

    for (let j = 0; j < arr.length - 1; j++) {
      newArr.push(compareColors(arr[j], arr[j + 1]));
    }
    arr.splice(0, arr.length, ...newArr);
    if (arr.length === 1) return;
    createNewArr(arr);
  }

  function numberToColor(num) {
    switch (num) {
      case -1:
        return "R";
      case 0:
        return "G";
      case 1:
        return "B";
    }
  }

  ColorsToNumbers(row);
  createNewArr(arr);
  return numberToColor(arr[0]);
} */

function triangle(row) {
  if (row.length === 1) return row;
  const arr = [];

  function ColorsToNumbers(row) {
    for (const color of row) {
      switch (color) {
        case "R":
          arr.push(-1);
          break;
        case "G":
          arr.push(0);
          break;
        case "B":
          arr.push(1);
          break;
      }
    }
    return;
  }

  function createNewArr(currentArr) {
    const newArr = [];
    function compareColors(A, B) {
      if (A === B) return A;
      if (A + B === 0) return 0;
      if (A + B === -1) return 1;
      return -1; //if (A + B === 1)
    }

    for (let j = 0; j < currentArr.length - 1; j++) {
      newArr.push(compareColors(currentArr[j], currentArr[j + 1]));
    }
    if (newArr.length === 1) {
      output = newArr[0];
      return;
    }
    createNewArr(newArr);
  }

  function numberToColor(num) {
    switch (num) {
      case -1:
        return "R";
      case 0:
        return "G";
      case 1:
        return "B";
    }
  }

  ColorsToNumbers(row);
  let output = null;
  createNewArr(arr);
  return numberToColor(output);
}

console.log(triangle("RGBBR"));

// function triangle(row0) {
//   let rows = { 0: row0 };

//   for (let rowNumber = 0; rowNumber < row0.length - 1; rowNumber++) {
//     rows[rowNumber + 1] = "";
//     for (let j = 0; j < rows[rowNumber].length - 1; j++) {
//       if (rows[rowNumber].charAt(j) === rows[rowNumber].charAt(j + 1)) {
//         rows[rowNumber + 1] += rows[rowNumber].charAt(j);
//       } else {
//         let pallette = "RGB";
//         pallette = pallette
//           .replace(rows[rowNumber].charAt(j), "")
//           .replace(rows[rowNumber].charAt(j + 1), "");
//         rows[rowNumber + 1] += pallette;
//       }
//     }
//   }
//   console.log(rows);
//   return rows[row0.length - 1];
// }

// console.log(triangle("RGBGBGR"));

// function triangle(row) {
//   const rows = {};
//   rows[0] = row;

//   for (let i = 1; i < row.length; i++) {
//     rows[i] = "";
//   } //creates empty object - triangle

//   for (let rowNumber = 0; rowNumber < row.length - 1; rowNumber++) {
//     const rows[rowNumber] = rows[rowNumber];
//     let newRow = "";
//     console.log(rowNumber, rows[rowNumber]);
//     for (let j = 0; j < rows[rowNumber].length - 1; j++) {
//       if (rows[rowNumber].charAt(j) === rows[rowNumber].charAt(j + 1)) {
//         newRow += rows[rowNumber].charAt(j);
//         console.log(
//           `two neigbour collors are the same, so adding color ${rows[rowNumber].charAt(
//             j
//           )}`
//         );
//       } else {
//         let pallette = "RGB";
//         pallette = pallette.replace(rows[rowNumber].charAt(j), "");
//         pallette = pallette.replace(rows[rowNumber].charAt(j + 1), "");
//         console.log(
//           `two neigbour collors are different(${rows[rowNumber].charAt(
//             j
//           )} and ${rows[rowNumber].charAt(j + 1)}), so adding color ${pallette}`
//         );
//         newRow += pallette;
//       }
//     }
//     rows[rowNumber + 1] = newRow;
//   }

//   console.log(rows);
//   return rows[row.length - 1];
// }
