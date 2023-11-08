const {readFromFile, writeToFile, readAndAppend} = require("./helpers/utils")
const {v4:uuidv4} = require("uuid");
const apiRouter = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");

//gets the user's already written notes 
apiRouter.get("/notes", (req, res) => {
 fs.readFile("./db/db.json", (err, data) => {
    if(err) throw err
    let notesData = JSON.parse(data)
    res.json(notesData)
 })   
});

//posts the user's notes to public 
apiRouter.post("/notes", (req, res) => { 
const {title, text } = req.body
const addedNote = {
   title, text, id:uuidv4()
}

readAndAppend(addedNote,"./db/db.json")
res.json(addedNote)
})

apiRouter.delete("/notes/:noteID", (req, res) => {
const noteID = req.params.id
const findNoteIndex = db.findIndex((index)=> index.id === noteID)
if (findNoteIndex === -1) {
   res.status(500).json("No note found")
}
db.splice(findNoteIndex,1)
fs.writeFileSync("./db/db.json", JSON.stringify(db))
res.status(200).json("note deleted")
})

module.exports = apiRouter


