function humanReadable(seconds) {
  let s = (seconds % 3600) % 60;
  let m = ((seconds - s) % 3600) / 60;
  let h = (seconds - s - m * 60) / 3600;

  const twoDigits = (x) => {
    if (x.toString().length === 1) {
      return "0" + x;
    }
    return x;
  };
  h = twoDigits(h);
  m = twoDigits(m);
  s = twoDigits(s);

  console.log(h, m, s);
  return h + ":" + m + ":" + s;
}

console.log(humanReadable(59));
