function substr(str,start,length)
{
    let a=""
    
    for(let i=start;i<(length+start);i++)
        {
            a+=str[i];
        }
      
        return a;
}
console.log(substr("i am a string", 2 ,5));