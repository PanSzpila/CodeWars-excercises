var moveZeros = function (arr) {
    return arr.filter(function(x) {return parseInt(x) !== 0}).concat(arr.filter(function(x) {return parseInt(x) === 0;}));
  }