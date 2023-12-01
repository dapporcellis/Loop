const express = require('express')
const app = express()
const path = require('path')
const moment = require('moment')
app.locals.moment = moment;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

const router = require('./routes/routes')

app.use(router)

app.listen('3000')