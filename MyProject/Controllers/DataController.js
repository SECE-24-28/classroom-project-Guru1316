const fs = require("fs");

let jsonData = JSON.parse(fs.readFileSync("./Menu.json", "utf-8"));


exports.createData = (req, res) => {
    const { title, item } = req.body;

    const category = jsonData.find((e) => e.card.card.title === title);

    if (!category) 
    {
        return res.status(404).json({
            status: "Failed",
            message: "Category not found"
        });
    }

    category.card.card.itemCards.push({
        card: { info: item }
    });

    fs.writeFile("./Menu.json", JSON.stringify(jsonData, null, 2),"utf-8",(err) => 
        {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: "File write error"
                });
            }

            return res.status(201).json({
                status: "Success",
                message: "Updated successfully",
                data: updatedItem
            });
        }
    );
}


exports.getAllDatas = (req,res) => {
    return res.status(200).json(
        {
            status: "Success",
            msg : req.msg,
            timeOfHit : req.requestTimeOfHit,
            data : {
                jsonData
            }
        }
    )
}

exports.getData = (req,res) => {
    const id = req.params.id;
    var menu;
    let item;
    jsonData.forEach((element) => {
        if(item) return;
        menu = element.card.card.itemCards;
        const found = menu.find((e) => e.card.info.id === id);
        if(found)
        {
            item = found.card.info;
        }
    });
    if(!item)
    {
        return res.status(404).json(
            {
                status: "Failed",
                message : "Please Enter A Valid menu Id"
            }
        )
    }
    return res.status(200).json(
        {
            status: "Success",
            msg : req.msg,
            timeOfHit : req.requestTimeOfHit,
            data : {
                item
            }
        }
    )
}

exports.updateData = (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    let updatedItem = null;
    jsonData.forEach((el) => {
        const items = el.card.card.itemCards;
        const item = items.find((e) => e.card.info.id === id);
         if (item) {
            Object.assign(item.card.info, updateData);
            updatedItem = item.card.info;
            return;
        }
    }
    )

    if (!updatedItem) {
        return res.status(404).json({
            status: "Failed",
            message: "Menu item not found"
        });
    }

    fs.writeFile("./Menu.json", JSON.stringify(jsonData, null, 2),"utf-8",(err) => {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: "File write error"
                });
            }

            return res.status(200).json({
                status: "Success",
                message: "Updated successfully",
                timeOfHit : req.requestTimeOfHit,
                data: updatedItem
            });
        }
    );
}

exports.deleteData = (req, res) => {
    const { id } = req.params;

    let deletedItem = null;

    jsonData.forEach((el) => {
        if (deletedItem) return;

        const items = el.card.card.itemCards;

        const item = items.find((e) => e.card.info.id === id);
        const index = items.findIndex((e) => e.card.info.id === id);

        if (item) 
        {
            deletedItem = item.card.info;
            items.splice(index, 1);
            return;
        }
    })

    if (!deletedItem) {
        return res.status(404).json({
            status: "Failed",
            message: "Menu item not found"
        });
    }

    fs.writeFile("./Menu.json",JSON.stringify(jsonData, null, 2),"utf-8",(err) => {
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: "File write error"
                });
            }
            return res.status(200).json({
                status: "Success",
                message: "Deleted successfully",
                timeOfHit : req.requestTimeOfHit,
                data: deletedItem
            });
        }
    );
}