import express, { Request, Response } from 'express';
import PostsController from './Controllers/PostsController';
import EmailController from './Controllers/EmailController';

const routes = express.Router();
const postsController = new PostsController;
const emailController = new EmailController;
routes.get('/',(req:Request,res:Response)=>{
    res.json({
        message:"E aí"
    });
});

routes.get('/posts',postsController.index);
routes.post('/posts',postsController.create);
routes.post('/mailer',emailController.enviar);

export default routes;
