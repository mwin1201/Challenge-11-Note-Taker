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


module.exports = writeFile;