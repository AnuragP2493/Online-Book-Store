const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const route = require('./controllers/routes');

var corsOptions = {
  origin: 'http://localhost:4200',
};

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ msg: 'server started listing ' });
});

app.use('/api', route);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log('server started runnig ');
});
