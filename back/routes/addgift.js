const express = require('express')
const fs = require('fs')
const path = require('path')

const { connection } = require('../helper/config')

const router = express.Router()

router.post('/:filename/:imgname' , (req,res) => {
    const { filename, imgname } = req.params
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ msg: 'No file upload' })
      }
    const file = req.files.file
    file.mv(path.resolve(__dirname, `../public/pictures/` , filename), err => {
        if(err){
            return res.status(500).send(err)
        }
        const sql = 'INSERT INTO gifts (name, picture) VALUES (?,?)'
        const values = [imgname, filename]
        connection.query(sql, values, (err,stats) => {
            if(err){
                console.error(err.messsage)
            }
            connection.query('SELECT name, picture from gifts WHERE id = ?' , stats.insertID, (err, result) => {
                if(err) throw err
                return res.status(201).send(result[0])
            } )
        })
    })
} )