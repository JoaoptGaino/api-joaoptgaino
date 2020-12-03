import { Request, Response } from 'express';
import EnviarEmail from '../Utils/EnviarEmail';


export default class EmailController {
    async enviar(req: Request, res: Response) {
        const {
            sender,
            subject,
            message
        } = req.body;

        if (!sender || !subject || !message) {
            return res.status(404).json({
                message: "Impossível enviar email sem os campos preenchidos"
            });
        }
        try {
            EnviarEmail.enviar(sender, subject, message);
            return res.status(200).json({
                message: "Email enviado com sucesso"
            });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}