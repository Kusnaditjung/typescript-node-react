import express from  'express';
import {Router} from 'express';
import {login, logout} from '../controllers/user'

const userRouter = express.Router();
userRouter.post('/login',  login);
userRouter.post('/logout', logout);
export default userRouter;


