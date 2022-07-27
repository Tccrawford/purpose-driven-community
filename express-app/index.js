require('dotenv').config()
const express = require('express')
const app = express()


//Routes
app.get('/', (req, res) => {
    res.render('login')
})


app.listen(process.env.PORT)