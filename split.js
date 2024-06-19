function split(str, a) {
  let ind = 0;
  let k = "";
  let emp_a = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === a) {
      emp_a[ind] = k;
      k = "";
      ind++;
    } else {
      k += str[i];
    }
  }
  emp_a[ind] = k;
  return emp_a;
}
console.log(split("this is a string", " "))
