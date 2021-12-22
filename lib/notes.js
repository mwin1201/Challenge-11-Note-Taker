// need file system to write file and modify the db
const fs = require("fs");

// write new database information accounting for new saved notes
const writeFile = (note) => {
    fs.writeFile('db/db.json', note, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("success");
        }
    });
};

// find the note to be deleted by ID, remove it from array, then write the file to the db location
const findNote = (notes, id) => {
    for (let i = 0; i < notes.length; i++) {
        if(notes[i].id == id) {
            notes.splice(i,1);
            writeFile(JSON.stringify(notes));
            return true;
        }
    };
    return false;
};

// make these functions accessible to other files in the application
module.exports = {
    writeFile,
    findNote
};