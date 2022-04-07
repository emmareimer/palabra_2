var nodemailer = require('nodemailer');
const User = require('../../models/User')

const currentUserEmail =  await User.findOne({where: {email: req.session.email}})
  
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'palabra.word.of.day@gmail.com',
        pass: 'welovewords!'
    }
});
  
let mailDetails = {
    from: 'xyz@gmail.com',
    to: currentUserEmail,
    subject: '',
    text: 'Node.js testing mail for GeeksforGeeks'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});

module.exports = nodemailer;
