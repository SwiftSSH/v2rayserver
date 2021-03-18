const nodemailer = require('nodemailer');
const config = require('./config.json');
const axios = require('axios');
const qs = require('querystring');
const service = "http://skylinesms.com/api/v2/json/messages";

function sendSMS(to, message, cb) {
  var data = {
    to,token: "a1877a0d4043b722b524ae02f9d8ac72",
    from: 'vpn',
    message: `
    #vpn
    ${message}
    
    `
  };
    // set the headers
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
    
  axios.post(service, qs.stringify(data), config)
  .then(({ status, data }) => {
    cb()
  }).catch((err) => {
    cb(err);
  });    
}

module.exports = {
  sms: { 
    send: function(to, text){
      sendSMS(to, text, function() {
        console.log(`sent sms to "${to}"`);
      });
    }
  },
    
  emailer: {
    getTp: function(){
      if(!this.tp){
        this.tp = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "user@gmail.com",
            pass: "pass"
          }
        })
      }
      return this.tp;
    },
    
    send: function(to, body, subject, cb = (() => {})){
      var tp = this.getTp();
      var mailOptions = {
        from: "reply@live.com",
        to, subject, text: body
      };
      
      tp.sendMail(mailOptions, function(error, info){
        console.log(`smtp sent mail to ${to}`, error, info);
      });
    }
  }
}