import { Router, Request, Response } from 'express';
import userRouter from './user.route';


const rootRouter = Router();

rootRouter.use('/admin', userRouter);


export default rootRouter;

