import express from 'express';
import {Router} from 'express';
import {listBookOrSearchByName, createBook} from '../controllers/book'

const bookRouter = express.Router();
bookRouter.get('/',  listBookOrSearchByName);
bookRouter.post('/',  createBook);
export default bookRouter;