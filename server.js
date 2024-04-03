const express = require('express');
const server = express()
const path = require("path")

server.use(express.static("dist/"))
server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
})

server.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        console.log("Error while staring server: ", err)
    } else {
        console.log("Server started at Port 3000")
    }
})