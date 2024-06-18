const a = "javascript";
let str = "";
for (let i = 0; i < a.length; i++) {
  let c = a.charCodeAt(i);
  if (c >= 97 && c <= 122) {
    c = c - 32;

    str = str + String.fromCharCode(c);
  }
}
console.log(str);
