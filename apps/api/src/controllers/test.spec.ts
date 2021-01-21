const supertest = require('supertest');
const request = supertest('https://www.googleapis.com//books/v1/');

describe('Book Controller ', () => {
  beforeEach(() => {});

  it('test for books successful', (done) => {
    request.get('volumes?q=java').end((err, res) => {
      if (err) throw err;
      expect(res.status).toEqual(200);
      done();
    });
  });

  it('test when error occurs if URI is wrong ', (done) => {
    request.get('voes?q=jhkjhkhkhkj').end((err, res) => {
      if (err) throw err;
      expect(res.status).toEqual(404);
      done();
    });
  });
});
