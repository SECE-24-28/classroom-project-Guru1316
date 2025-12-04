function createFruitArray(...x)
{
    let a = [];
    if(x.length == 0)
    {
        a.push("apple");
        a.push("banana");
    }
    else
    {
        x.forEach((element, index) => 
        {
            if(typeof element === 'string')
            {
                a.push(element);
            }      
        })
    }
    return a;
}
console.log(createFruitArray("Orange", "Jackfruit"));
console.log(createFruitArray());