const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv")
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.get("/", (req, res) => {
    res.send("Api is running.....");
})

app.get("/api/notes", (req, res) => {
    res.json(notes)
})

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((e) => e._id == req.params.id);
    res.send(note)
})

app.listen(PORT, console.log(`server started on port ${PORT}`)); 