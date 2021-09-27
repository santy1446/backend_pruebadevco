var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'candidatosnovedad25@gmail.com',
        pass: 'Candnovdev25'
    }
});

export const sendEmail = (req, res) => {
    const {destinatary, subject, message} = req.body

    let mailOptions = {
        from: 'candidatosnovedad25@gmail.com',
        to: destinatary,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        console.log(error, info)
        if (error) {
          console.log(error);
          res.json(error)
        } else {
          console.log('Email enviado: ' + info.response);
          res.json('Email enviado: ' + info.response)
        }
    });
    
}