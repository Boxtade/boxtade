var nodemailer = require('nodemailer');
var fs = require("fs");


exports.send = function(setup,callback) {

    var transporter = nodemailer.createTransport(setup.options());

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            var htmlstream = fs.createReadStream(setup.template());
            var mailOptions = {
                from: setup.from(), // sender address
                to: setup.to(), // list of receivers
                subject: setup.subject(), // plaintext body
                html: htmlstream // html body
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    fs.appendFile('bmailer.log',"Line 22, mailer.je : "+err+"\n");
                }
                
                if(callback !== undefined)
                    callback();
            });
        }
    });
};

exports.send_option = function(setup,option,callback) {

    var transporter = nodemailer.createTransport(setup.options());

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            transporter.sendMail(option, function (err, info) {
                if (err) {
                    fs.appendFile('bmailer.log',"Line 42, mailer.je : "+err+"\n");
                }

                if(callback !== undefined)
                    callback();
            });
        }
    });
};

exports.send_to = function(setup,to,callback) {

    var transporter = nodemailer.createTransport(setup.options());

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            var htmlstream = fs.createReadStream(setup.template());
            var mailOptions = {
                from: setup.from(), // sender address
                to: to, // list of receivers
                subject: setup.subject(), // plaintext body
                html: htmlstream // html body
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    fs.appendFile('bmailer.log',"Line 69, mailer.je : "+err+"\n");
                }

                if(callback !== undefined)
                    callback();
            });
        }
    });
};
 
 