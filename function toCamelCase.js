function toCamelCase(str) {
  if (str == "") return str;
  let arr = str.split("-").join(", ").split("_").join(", ").split(", ");
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  str = arr.join();
  str = str.replace(/,/g, "");
  return str;
}

console.log(toCamelCase("the_stealth_warrior"));

function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
}

/*
String.prototype.replaceCharAt = function (place, replacement) {
  console.log("uruchomiono funckę replaceat(" + (place) + ", " + replacement +  ")");
  if (place > this.length - 1) return this.toString();
  else
    return (
      this.substr(0, place) +
      replacement +
      this.substr(place + replacement.length)
    );
}



function toCamelCase(str){
    if (str == "") return str;
 for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "-" || str.charAt(i) === "_") {
      str = str.replaceCharAt((i-1), str.charAt(i-1).toUpperCase);
    };
  };
  return str;   
}

console.log(toCamelCase('the_stealth_warrior'))






function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

function check(keyNumber) {
    let correctLetter = false;
    for (let i = 0; i < sloganHidden.length; i++) {
      let keyLetter = letters[keyNumber];
      let sloganLetter = slogan.charAt(i);
  
      if (sloganLetter === keyLetter) {
        correctLetter = true;
        console.log("trafiono literę");
        sloganHidden = sloganHidden.replaceCharAt(i, sloganLetter);
        document.getElementById("sloganTable").innerHTML =
          "<h1>" + sloganHidden + "</h1>";
      }

      */
