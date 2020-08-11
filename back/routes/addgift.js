const express = require('express')
const fs = require('fs')
const path = require('path')

const { connection } = require('../helper/config')

const router = express.Router()

router.post('/:filename/:imgname', (req, res) => {
    const { filename, imgname } = req.params
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ msg: 'No file upload' })
      }
    const file = req.files.file
    file.mv(path.resolve(__dirname, `../public/pictures` , filename), err => {
        if(err){
            return res.status(500).send(err)
        }
        const sql = 'INSERT INTO gifts (name, picture) VALUES (?,?)'
        const values = [imgname, filename]
        connection.query(sql, values, (err,stats) => {
            if(err){
                console.error(err.messsage)
            }
        })
    })
} )

router.delete('/:idGift/:giftname', (req, res) => {
    console.log(req.params)
    const { idGift, giftname } = req.params
    const filePath = path.resolve(__dirname, `../public/pictures/${giftname}`)
    if (giftname !== '') {
      try {
        fs.unlinkSync(filePath)
      } catch (err) {
        console.error(err)
      }
    }
    connection.query('DELETE FROM gifts WHERE id = ?', idGift, err => {
      if (err) {
        res.status(500).send('Error when deleting a gift')
      } else {
        res.status(200).send('The gift has been deleted')
      }
    })
  })
  

module.exports = router