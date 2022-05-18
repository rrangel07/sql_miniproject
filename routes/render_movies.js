const render = require('express').Router();

render.get('/', (req,res) => {
   
    db.query('SELECT * FROM favorite_books', function (err, results) {
        if (err) res.status(500).json({ error: err.message });
        res.json({
            message: 'success',
            data: results
        })
});


// 

module.exports = render;