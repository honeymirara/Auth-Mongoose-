const express = require('express');
const bodyParser = require('body-parser')
const route = require('../src/controller/user.controller')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', route)




app.use((err, req, res, next) => res.send(err.message))

module.exports = app