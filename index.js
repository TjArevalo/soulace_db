const express = require("express");
const app = express();
const cors = require('cors')
const lyrics = require("./lyricData.json");


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Request Successful. Welcome to a piece of my mind.")
});

app.get("/lyrics", (req, res) => {
    res.send(lyrics)
})

app.listen(8080, () => {
    console.log("Connected on port 8080")
});