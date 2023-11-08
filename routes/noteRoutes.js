// Import necessary modules and functions
const {readFromFile, writeToFile, readAndAppend} = require("./helpers/utils")
const {v4:uuidv4} = require("uuid");
const apiRouter = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");

// Define an API route to get user's notes
apiRouter.get("/notes", (req, res) => {
   // Read the contents of the 'db.json' file
 fs.readFile("./db/db.json", (err, data) => {
    if(err) throw err
    // Parse the data from JSON to JavaScript object
    let notesData = JSON.parse(data)
    // Respond with the parsed data as JSON
    res.json(notesData)
 })   
});

// Define an API route to post a new note
apiRouter.post("/notes", (req, res) => {
   // Extract the 'title' and 'text' from the request body 
const {title, text } = req.body
    // Create a new note object with a unique ID using uuidv4

const addedNote = {
   title, text, id:uuidv4()
}

 // Append the new note to the 'db.json' file
readAndAppend(addedNote,"./db/db.json")
    // Respond with the added note as JSON
res.json(addedNote)
})

// Define an API route to delete a note by its ID
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


