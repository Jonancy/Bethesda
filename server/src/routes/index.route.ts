import { Router, Request, Response } from 'express';
import userRoutes from './user.route';
import clientRoutes from './client.route';
import teamMemberRoutes from './teamMembers.route';
import newsArticlesRoutes from './newsArtilces.route';
import { getPage1Details } from '../controller/page1-controllers';
import pageOneRoutes from './pageone.route';


const rootRouter = Router();

rootRouter.use('/client',clientRoutes)
rootRouter.use('/user',userRoutes)
rootRouter.use('/team-member',teamMemberRoutes)
rootRouter.use('/news-article',newsArticlesRoutes)
rootRouter.use('/page-one',pageOneRoutes)


export default rootRouter;

