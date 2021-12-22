const fs = require("fs");


const writeFile = (note) => {
    fs.writeFile('db/db.json', note, (err) => {
        if (err) {
            console.log(err);
        }
        else {

        }
    });
};


module.exports = writeFile;