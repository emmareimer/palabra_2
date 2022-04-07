var nodemailer = require('nodemailer');
const User = require('../../models/User')

const user =  await User.findOne({where: {email: req.session.email}})


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'palabra.word.of.day@gmail.com',
    pass: 'welovewords!'
  }
});

var mailOptions = {
  from: 'palabra.word.of.day@gmail.com',
  to: email,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports = nodemailer;
