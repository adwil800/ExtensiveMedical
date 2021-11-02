const nodemailer = require('nodemailer');




const sendEmail = async  (options) =>{
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "cassistant20@gmail.com", // generated ethereal user
      pass: "olgamaria1", // generated ethereal password
    },	
  });
 
  // send mail with defined transport object
  const message = {   //
    from: '"John Doe" <noreply@assistant.io>', // sender address
    to: "adwil800@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  await transporter.sendMail(message);

}; 

module.exports = sendEmail;









/* // async..await is not allowed in global scope, must use a wrapper
const sendEmail = async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "cassistant20@gmail.com", // generated ethereal user
      pass: "olgamaria1", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"John Doe" <noreply@assistant.io>', // sender address
    to: "adwil800@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
main().catch(console.error);

}


*/

 