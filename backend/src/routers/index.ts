import express from  'express';
import userRouter from '../routers/user';
import bookRouter from '../routers/book';

const rootRouter = express.Router();
rootRouter.use('/user', userRouter);
rootRouter.use('/book', bookRouter);
export default rootRouter;
