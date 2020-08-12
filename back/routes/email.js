const express = require('express')
const router = express.Router()
const transporter = require('../helper/transporter')
const { connection } = require('../helper/config')

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM recipient'
  connection.query(sql, (err, result) => {
    if(err) throw err
    return res.status(200).send(result)
  })

})

router.post('/', (req, res, next) => {
  const gifts = req.body.gifts
  const contactList = req.body.contact 
  const nameList = gifts.map(gift => gift.name)
  const contact = contactList.map(list => list.email)
  const mail = {
    from: process.env.THE_EMAIL,
    to: process.env.THE_EMAIL,
    subject: req.body.subject,
    text: `
    from: Stéphane Pinto 
    contact: ${contact}
    subject: Gifts
    message: Hello
    here is my gift list
    ${nameList}
    cordially`
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