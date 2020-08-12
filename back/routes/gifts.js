const express = require('express')

const { connection } = require('../helper/config')

const router = express.Router()

// Chercher tous les cadeaux dans la BDD et les renvoyer en JSON
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM gifts'
  connection.query(sql, (err, result) => { 
    if(err) throw err
    return res.status(200).send(result)
    })
  })

module.exports = router