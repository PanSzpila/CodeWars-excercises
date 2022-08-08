function validParentheses(parens) {
  let open = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens.charAt(i) === "(") open++;
    if (parens.charAt(i) === ")") open--;
    if (open < 0) return false;
  }
  return open === 0;
}
