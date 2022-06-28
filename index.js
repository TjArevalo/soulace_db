const express = require("express");
const app = express();
const lyrics = require("./lyricData.json");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Request Successful. Welcome to a piece of my mind.")
});

app.get("/lyrics", (req, res) => {
    let sending = JSON.parse(lyrics)
    res.send(sending)
})

app.listen(8080, () => {
    console.log("Connected on port 8080")
});