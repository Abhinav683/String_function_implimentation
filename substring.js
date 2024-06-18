function substring(str,a,b)
{
    let v=""
    for(let i=a;i<b;i++)
        {
            v+=str[i];
        }
        return v
}
console.log(substring("i am a string",3,7));