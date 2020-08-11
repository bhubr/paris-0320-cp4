const express = require('express')
const path = require('path')
const cors = require('cors')
const logger = require('morgan')
const fileUpload = require('express-fileupload')


const { port } = require('./helper/config')
const indexRoutes  = require('./routes/indexRoutes')

const app = express()

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/gifts', indexRoutes.Gifts)
app.use('/addgift', indexRoutes.Addgift)

// Use PORT 8000

app.listen(port, (err) => {
  if (err) {
    console.error('ERROR while starting up server:', err.message)
  } else {
    console.log(`Server running on port ${port}`)
  }
})
