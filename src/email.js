
const nodemailer = require('nodemailer');

const sendEmail=(to)=>{
const smtpTransport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mai.sa2sa2@gmail.com',
        pass:'Ma1sa2sa2'
    }
})
const mail =getEmailData(to);
smtpTransport.sendEmail(mail,function(error,response){
    if(error){
        console.log(error)
    }else{
        console.log("email sent successfully")
    }
    smtpTransport.close();
}
}




export default sendEmail;