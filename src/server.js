const express=require('express')
const app =express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const cors=require('cors')

app.use(cors())

const nodemailer = require('nodemailer');

function sendEmail(link,email){
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mai.sa2sa2@gmail.com',
        pass:'ma1sa2sa2@#'
    }
})


  // send mail with defined transport object
  let info =  transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: "qr Link", // Subject line
    text: link, // plain text body
    html: link, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

app.post("/api/sendMail",(req, res)=>{
    console.log(req.body);
sendEmail(req.body.link,req.body.email)
})
app.listen(3001,()=>{
    console.log("server is running ");
})
