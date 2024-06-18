function trim_start(str) {
  let a = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      a = i;
      break;
    }
  }
  let s = 0;
  let str2 = [];
  let v = "";
  for (let i = a; i < str.length; i++) {
    str2[s] = str[i];
    s++;
  }
  for (let i = 0; i < str2.length; i++) {
    v = v + str2[i];
  }
  return v;
}

console.log(trim_start("  Hello_word"));
