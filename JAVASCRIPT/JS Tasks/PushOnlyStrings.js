function stringOnly(...x)
{
    let a = [];
    x.forEach((element, index) => 
    {
        if(typeof element === 'string')
        {
            a.push(element);
        }      
    })
    return a;
}
console.log(stringOnly(1, "2", 3, "4", 5));