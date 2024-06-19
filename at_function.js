function At(str, ind) {
  return str[ind];
}
console.log(At("Hello World", 3));

String.prototype.at = function (index){
  return this[index];
}
"this".at(2);