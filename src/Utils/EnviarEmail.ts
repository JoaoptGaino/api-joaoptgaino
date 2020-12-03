import nodemailer from 'nodemailer';
import config from '../Configs/index';

export default new class EnviarEmail{
    async enviar(sender:string,subject:string,message:string){
        let mailOptions = {
            from:config.user,
            to:'joaoptgaino@hotmail.com',
            subject,
            html:`<p>Email enviado port ${sender}</p><br/><br/> ${message}`,
        }

        const transporter = nodemailer.createTransport({
            host:config.host,
            port:config.port,
            secure:false,
            service:'hotmail',
            auth:{
                user:config.user,
                pass:config.password
            },
            tls:{rejectUnauthorized:false}
        });
        console.log(mailOptions);
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Email enviado!!! " + info);
            }
        })
    }
}