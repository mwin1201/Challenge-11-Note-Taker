const fs = require("fs");


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


module.exports = {
    writeFile,
    findNote
};