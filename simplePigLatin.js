function pigIt(str) {
  let arr = str.split(" ");
  const changeWord = (word) => {
    if (
      word[0] === "!" ||
      word[0] === "?" ||
      word[0] === "," ||
      word[0] === "."
    ) {
      return word;
    }
    return word.substring(1) + word[0] + "ay";
  };
  arr = arr.map(changeWord);
  return arr.join([(separator = " ")]);
}

console.log(pigIt("Pig latin is cool"));
