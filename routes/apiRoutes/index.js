const router = require("express").Router();
const [ notes ] = require('../../db/db.json');


router.get('/notes', (req, res) => {
    if (notes) {
        console.log("i am here");
        res.json(notes);
    }
});




module.exports = router;