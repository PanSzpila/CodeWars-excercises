function formatDuration(seconds) {
  if (!seconds) return "now";
  // let s = (seconds % 3600) % 60;
  // let m = ((seconds - s) % 3600) / 60;
  // let h = (seconds - s - m * 60) / 3600;

  let s = (((seconds % 31536000) % 86400) % 3600) % 60;
  let m = ((((seconds - s) % 31536000) % 86400) % 3600) / 60;
  let h = (((seconds - s - m * 60) % 31536000) % 86400) / 3600;
  let d = ((seconds - s - m * 60 - h * 3600) % 31536000) / 86400;
  let y = Math.floor(seconds / 31536000);

  const twoDigits = (x) => {
    if (x.toString().length === 1) {
      return "0" + x;
    }
    return x;
  };

  //console.log(y, d, h, m, s);
  let arr = [];
  if (y) {
    y > 1 ? arr.push(y + " years") : arr.push(y + " year");
  }
  if (d) {
    d > 1 ? arr.push(d + " days") : arr.push(d + " day");
  }
  if (h) {
    h > 1 ? arr.push(h + " hours") : arr.push(h + " hour");
  }
  if (m) {
    m > 1 ? arr.push(m + " minutes") : arr.push(m + " minute");
  }
  if (s) {
    s > 1 ? arr.push(s + " seconds") : arr.push(s + " second");
  }
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 2) {
      output += arr[i] + ", ";
    }
    if (i === arr.length - 2) {
      output += arr[i] + " and ";
    }
    if (i === arr.length - 1) {
      output += arr[i];
    }
  }

  return output;
}

console.log(formatDuration(3662));
