const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');




router.get('/books/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    fetch('https://www.googleapis.com/books/v1/volumes?q='+ id, {
        method: 'get',
        // body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => console.log(err))

})

module.exports = router 