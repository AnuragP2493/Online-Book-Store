import * as express from 'express';
import * as book from '../controllers/routes';
export const router = express.Router();

router.get('/books/:searchTerm', book.getbooks);
