const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');



 router.get('/books/:id',  (req, res ) => {
    const id = req.params.id
    fetch('https://www.googleapis.com/books/v1/volumes?q='+ id, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => { res.send(transformdata(json)) 
      
    })
    .catch(err => console.log(err))
})

transformdata =  (value) => {
    const items = []
    value.items.forEach(item => {   
    const  data = {
          id : item.id,
          title : item.volumeInfo.title,  
          authors: item.volumeInfo.authors, 
          description : item.volumeInfo.description,
          publisher:  item.volumeInfo.publisher,
          averageRating: item.volumeInfo.averageRating,
          imageLinks:  item.volumeInfo.imageLinks.smallThumbnail,
          pageCount : item.volumeInfo.pageCount,
          language : item.volumeInfo.language
      }
      items.push(data)
  })
  return  items
}
 
module.exports = router 