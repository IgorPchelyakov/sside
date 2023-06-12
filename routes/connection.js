import { Router } from 'express'
import nodemailer from 'nodemailer'

const router = Router()

router.post('/send-connection', (req, res) => {
    const { thema, lastName, firstName, phone, email, city, message } = req.body

    const transporter = nodemailer.createTransport({
        service: 'mail.daycom.com.ua',
        port: 465,
        secure: false,
        auth: {
          user: 'MailInform@daycom.com.ua',
          pass: '*%daYPi*54hryHHHf',
        },
      });
    
      const mailOptions = {
        from: 'mail.daycom.com.ua',
        to: 'info@daycom.com.ua',
        subject: "Повідомлення з форми зворотнього звя'зку",
        text: `
          Тема: ${thema}
          Прізвище: ${lastName}
          Ім'я: ${firstName}
          Контактний телефон: ${phone}
          E-mail: ${email}
          Місто: ${city}
          Повідомлення: ${message}
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Cталася помилка.');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Повідомлення успішно відправлено.');
        }
      });
})


export default router