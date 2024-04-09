import { Router} from 'express';
import userRoutes from './user.route';
import teamMemberRoutes from './teamMembers.route';
import newsArticlesRoutes from './newsArtilces.route';
import pageOneRoutes from './pageone.route';
<<<<<<< HEAD
import blogsRoutes from './blog.route';
=======
import aboutUsRoutes from './aboutUs.routes';
>>>>>>> ea87b6db04a24337895b88aa463493580653a3dd


const rootRouter = Router();


rootRouter.use('/user',userRoutes)
rootRouter.use('/team-member',teamMemberRoutes)
rootRouter.use('/news-article',newsArticlesRoutes)
rootRouter.use('/page-one',pageOneRoutes)
<<<<<<< HEAD
rootRouter.use('/blogs',blogsRoutes)
=======
rootRouter.use('/about-us',aboutUsRoutes)
>>>>>>> ea87b6db04a24337895b88aa463493580653a3dd


export default rootRouter;

