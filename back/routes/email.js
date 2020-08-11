const express = require('express')
const router = express.Router()
const transporter = require('../helper/transporter')

router.post('/', (req, res, next) => {
  const mail = {
    from: process.env.THE_EMAIL,
    to: process.env.THE_EMAIL,
    subject: req.body.subject,
    text: `
    from: ${req.body.name}
    contact: ${req.body.email}
    subject: ${req.body.subject}
    message: ${req.body.text}`
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})

module.exports = router