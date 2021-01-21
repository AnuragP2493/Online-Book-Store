const express = require('express');
const request = require('request');

export const getbooks = (req, response) => {
  const searchTerm = req.params.searchTerm;
  console.log('search term', searchTerm, response);
  request.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`,
    (err, res, body) => {
      if (err) {
        console.log(err);
        response.send({ msg: 'erroe' + err });
      }
      let filteredBooks = transformdata(JSON.parse(body).items);
      response.send(filteredBooks);
    }
  );
};

export const transformdata = (value: any[]) => {
  console.log(value);
  const items = [];
  value.forEach((item) => {
    const data = {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      publisher: item.volumeInfo.publisher,
      averageRating: item.volumeInfo.averageRating,
      imageLinks: item.volumeInfo.imageLinks.smallThumbnail,
      pageCount: item.volumeInfo.pageCount,
      language: item.volumeInfo.language,
    };
    items.push(data);
  });
  return items;
};

// export const app;
