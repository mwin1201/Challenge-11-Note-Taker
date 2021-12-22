const router = require("express").Router();
const notes = require('../../db/db.json');
const writeFile = require('../../lib/notes');


// get saved notes
router.get('/notes', (req, res) => {
    let response = notes;
    res.json(response);
});

// post note written by user
router.post('/notes', ({ body }, res) => {
    if (!body.title || !body.text) {
        res.sendStatus(404);
        return;
    }
    body.id = Math.floor(Math.random() * 10000);
    let response = notes;
    response.push(body);
    writeFile(JSON.stringify(response));
    res.json({
        message: 'success',
        data: body
    });
});



module.exports = router;