import * as express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');
export const app = express();
// const route = require('./controllers/routes');
import { router as bookRoute } from '../src/routes/routes';

var corsOptions = {
  origin: 'http://localhost:4200',
};

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ msg: 'server started listing ' });
});

app.use('/api', bookRoute);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log('server started runnig ');
});
