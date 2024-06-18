function replace(str, a,b)
{
    let arr=[]
   arr=split(str," ")
   console.log(arr);
   for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
        if(arr[i]==a)
            {
                arr[i]=b;
            }
    }
    return arr;
}
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
  

 console.log(replace("this is a string", "string", "none"));