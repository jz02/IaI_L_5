console.log("Hello World");
var s="";

for(var i = 1; i< 11 ;i++)
{
    for(var j = 1; j< 11 ;j++)
    {
        s+=j*i+"  ";
    }
    s+="\n";
}
console.log(s);