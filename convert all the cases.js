function changeCase(identifier, targetCase) {
  if (identifier == "") return identifier;

  function uppercaseFound(string) {
    let letterString = string.replace(/[^a-zA-Z]/g,"");
    for (let i = 1; i < letterString.length; i++) {
      if (letterString[i] == letterString[i].toUpperCase()) {
        console.log(i, letterString[i]);
        return true;
      }
    }
    return false;
  }
  if (
    (identifier.search("-") > -1 &&
      identifier.search("_") > -1 &&
      uppercaseFound(identifier) === true) ||
    (identifier.search("-") > -1 && identifier.search("_") > -1) ||
    (identifier.search("_") > -1 && uppercaseFound(identifier) === true) ||
    (identifier.search("-") > -1 && uppercaseFound(identifier) === true)
  ) {
    //można skrócić warunek?
    return undefined;
  }
  if (identifier.search("-") === -1 && identifier.search("_") === -1) {
    for (let i = 1; i < identifier.length; i++) {
      if (identifier[i] == identifier[i].toUpperCase()) {
        identifier =
          identifier.slice(0, i) + "-" + identifier.slice(i, identifier.length);
        i++;
      }
    }
  }
  let arr = identifier.split("-").join(", ").split("_").join(", ").split(", ");

  switch (targetCase) {
    case "camel":
      for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      identifier = arr.join();
      identifier = identifier.replace(/,/g, "");
      return identifier;

    case "snake":
      identifier = arr.join();
      identifier = identifier.replace(/,/g, "_");
      return identifier.toLowerCase();
      break;

    case "kebab":
      identifier = arr.join();
      identifier = identifier.replace(/,/g, "-");
      return identifier.toLowerCase();

    default:
      return undefined;
  }
}

function changeCase(identifier, targetCase){
  if(!/^$|^[a-z]+(([A-Z][a-z]*)+|(-[a-z]+)*|(_[a-z]+)*)$/.test(identifier)) return undefined;
   switch(targetCase){
     case 'snake': return identifier.replace(/-([a-z])|([A-Z])/g, (_,x,y) => '_'+(x||y.toLowerCase()));
     case 'camel': return identifier.replace(/[-_]([a-z])/g, (_,x) => x.toUpperCase());
     case 'kebab': return identifier.replace(/_([a-z])|([A-Z])/g, (_,x,y) => '-'+(x||y.toLowerCase()));
     default: return undefined;
   }
 }

console.log(changeCase("the_stealth_warrior", "kebab"));

function uppercaseSearch(string) {
  for (let i = 1; i < string.length; i++) {
    if (string[i] == sring[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

/*
function toCamelCase(identifier){
  var regExp=/[-_]\w/ig;
  console.log(match);
  return identifier.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
}

/*
identifiering.prototype.replaceCharAt = function (place, replacement) {
  console.log("uruchomiono funckę replaceat(" + (place) + ", " + replacement +  ")");
  if (place > this.length - 1) return this.toidentifiering();
  else
    return (
      this.subidentifier(0, place) +
      replacement +
      this.subidentifier(place + replacement.length)
    );
}



function toCamelCase(identifier){
    if (identifier == "") return identifier;
 for (let i = 0; i < identifier.length; i++) {
    if (identifier.charAt(i) === "-" || identifier.charAt(i) === "_") {
      identifier = identifier.replaceCharAt((i-1), identifier.charAt(i-1).toUpperCase);
    };
  };
  return identifier;   
}

console.log(toCamelCase('the_stealth_warrior'))






function camelize(identifier) {
    return identifier.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
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
