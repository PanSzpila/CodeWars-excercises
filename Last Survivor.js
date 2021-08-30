String.prototype.removeCharAt = function (i) {
  var tmp = this.split(''); // convert to an array
  tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
  return tmp.join(''); // reconstruct the string
}

function lastSurvivor(letters, coords) {
  let j = coords.length;
  for (let i = 0; i < j; i++) {
    console.log(i,j,letters,coords, coords[0]);
    letters = letters.removeCharAt(coords[0]);
    coords.splice(0, 1);
  }
  return letters;
}

console.log(lastSurvivor('kbc', [0, 1]))


function lastSurvivor(letters,coords) { return coords.reduce( (letters,coord) => letters.slice(0,coord) + letters.slice(coord+1) , letters ); }