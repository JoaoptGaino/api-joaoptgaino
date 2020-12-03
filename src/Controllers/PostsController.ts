import { Request, Response } from 'express';
import db from '../Database/connection';

export default class PostsController {
    async index(req: Request, res: Response) {
        const posts = await db('postagens')
            .select('*');

        return res.json(posts);
    }
    async create(req: Request, res: Response) {
        const { title, description, texto, url } = req.body
        const post = { title, description, texto, url };
        const trx = await db.transaction();
        try {
            await trx('postagens').insert(post);
            await trx.commit();
            return res.status(201).json({
                message:"Created new post",
                post
            });
        }catch(err){
            await trx.rollback();
            console.log(err.message);
            return res.status(500).json({
                message:"Internal error while creating new post"
            })
        }
    }
}