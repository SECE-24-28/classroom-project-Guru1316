function addTen(...x)
{
    let a = [];
    x.forEach((element, index) => 
    {
        if(typeof element === 'number')
        {
            a.push(element+10);
        }      
    })
    return a;
}
console.log(addTen(1, 2, 3, "4", "Guru"));