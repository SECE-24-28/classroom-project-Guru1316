function getEvenNumbers(...x)
{
    let a = [];
    x.forEach((element, index) => 
    {
        if(typeof element === 'number')
        {
            if(element%2==0)
            {
                a.push(element);
            }
        }      
    })
    return a;
}
console.log(getEvenNumbers(1, 2, 3, 4, 5, "ABC"));