import { Router, Request, Response } from 'express';
import userRoutes from './user.route';
import teamMemberRoutes from './teamMembers.route';
import newsArticlesRoutes from './newsArtilces.route';
import { getPage1Details } from '../controller/page1-controllers';
import pageOneRoutes from './pageone.route';
import blogsRoutes from './blog.route';


const rootRouter = Router();


rootRouter.use('/user',userRoutes)
rootRouter.use('/team-member',teamMemberRoutes)
rootRouter.use('/news-article',newsArticlesRoutes)
rootRouter.use('/page-one',pageOneRoutes)
rootRouter.use('/blogs',blogsRoutes)


export default rootRouter;

