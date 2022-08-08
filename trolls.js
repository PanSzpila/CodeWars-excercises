function disemvowel(str) {
    if (!str.contains("a" || "e" || "i" || "o"|| "u")) {return str};
    for (let i = 0; i < str.length; i++) {
        const element = array[i];
        if (element === "a" || "e" || "i" || "o"|| "u") {

        }
        
    }
    return str;
  }




function disemvowel(str) {
    if (!(str.contains("a") || (str.contains("e")) || (str.contains("i")) || (str.contains("o")) || (str.contains("u")))) {return str};
    return str.replace(/a/gi, '').replace(/e/gi, '').replace(/i/gi, '').replace(/o/gi, '').replace(/u/gi, '')
  }

str.contains("8")