const mailer = require('nodemailer')

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  pool: true,
  secure: false,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD
  }
}

const transporter = mailer.createTransport(transport)
transporter.verify((err, success) => {
  if (err) {
    console.error(err)
  } else {
    console.log('users ready to mail myself')
  }
})

module.exports = transporter
