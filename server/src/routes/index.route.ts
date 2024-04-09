import { Router} from 'express';
import userRoutes from './user.route';
import clientRoutes from './client.route';
import teamMemberRoutes from './teamMembers.route';
import newsArticlesRoutes from './newsArtilces.route';
import pageOneRoutes from './pageone.route';
import aboutUsRoutes from './aboutUs.routes';


const rootRouter = Router();

rootRouter.use('/client',clientRoutes)
rootRouter.use('/user',userRoutes)
rootRouter.use('/team-member',teamMemberRoutes)
rootRouter.use('/news-article',newsArticlesRoutes)
rootRouter.use('/page-one',pageOneRoutes)
rootRouter.use('/about-us',aboutUsRoutes)


export default rootRouter;

