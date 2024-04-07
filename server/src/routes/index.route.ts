import { Router, Request, Response } from 'express';
import userRouter from './user.route';
import clientRoutes from './client.routes';


const rootRouter = Router();

rootRouter.use('/admin', userRouter);
rootRouter.use('/client',clientRoutes)

export default rootRouter;

