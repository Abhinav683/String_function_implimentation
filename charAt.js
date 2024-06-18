function charAt(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return i;
  }
}
console.log(charAt("Hello World", "W"));
