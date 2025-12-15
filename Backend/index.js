const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

const jsonData = JSON.parse(fs.readFileSync("./SeriesData.json","utf-8"));
// console.log(jsonData);

// CRUD Operation
// C: Creation - POST
// R: Read - GET
// U: Update - PUT, PATCH
// D: Delete - DELETE

const PORT_NO = 9000;

// 1) URL (API Endpoints)
// 2) Callback Function(req, res)
app.get("/api/V1/series", (req, res) => {
    return res.status(200).json({
        status: "Successful",
        length: jsonData.length,
        data: {
            jsonData
        },
    })
});

app.get("/api/V1/series/:id", (req, res) => {
    let id = req.params.id;
    let series = jsonData.find((e) => e.id === Number(id));
    if(!series)
    {
        return res.status(404).json(
            {
                status: "Failed",
                message: "Please check your series id",
            }
        )
    }
    return res.status(200).json(
        {
            status: "Successful",
            data : {
                series
            },
        }
    )
})

app.post("/api/V1/series", (req, res) => {
    const series = Object.assign(req.body);
    jsonData.push(series);
    fs.writeFile("./SeriesData.json", JSON.stringify(jsonData, null, 2), "utf-8", (err) => 
    {
            if(err){
            return res.status(400).json(
                {
                    status : "Failed to write",
                }
            )}
            return res.status(201).json(
            {
                status : "True",
                data : {
                    series
                },
            })
    });
    console.log(req.body);
})

app.put("/api/V1/series/:id", (req, res) => {
    const seriesId = req.params.id;
    const series = jsonData.find((e) => e.id === Number(seriesId));
    if(!series)
    {
        return res.status(404).json(
            {
                status: "Failed",
                message: "Please check your series id",
            }
        )
    }
    return res.status(204).json(
        {
            status: "Successful",
            message: "<>Updated Successfully</>"
        }
    )
})

app.delete("/api/V1/series/:id", (req, res) => {
    const seriesId = req.params.id;
    const series = jsonData.find((e) => e.id === Number(seriesId));
    if(!series)
    {
        return res.status(404).json(
            {
                status: "Failed",
                message: "Please check your series id",
            }
        )
    }
    return res.status(200).json(
        {
            status: "Successful",
            message: "<>Deleted Successfully</>"
        }
    )
})

app.listen(PORT_NO, () => {
    console.log("Server started successfully on port no: ",PORT_NO);
})