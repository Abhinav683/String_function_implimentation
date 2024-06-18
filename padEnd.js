function padEnd(str,len ,a)
{
    let newStr = str
    while(newStr.length<len){
      newStr+=a;
    }
    return newStr;
}
console.log(padEnd("55",5,"0"));