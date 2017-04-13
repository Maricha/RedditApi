import express from 'express';

import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';

const routes = express();

//Basic routes
routes.get('/', basicController.getAvatar);

//User routes
routes.post('/signup', userController.post);

//Post routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);
export default routes;