import express, { Request, Response } from 'express';
import PostsController from './Controllers/PostsController';

const routes = express.Router();
const postsController = new PostsController;
routes.get('/',(req:Request,res:Response)=>{
    res.json({
        message:"E aí"
    });
});

routes.get('/posts',postsController.index);
routes.post('/posts',postsController.create);


export default routes;
