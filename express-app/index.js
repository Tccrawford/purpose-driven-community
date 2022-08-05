// DEPENDENCIES
const express = require("express");
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_KEY)

// CONFIGURATION
//require('dotenv').config({path: '../.env'})
require('dotenv').config()
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//Controllers

const usersController = require("./controllers/users_controller.js")
app.use('/users', usersController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
});

//Stripe

app.post('/create-checkout-session', async (req, res) => {
    try{

    } catch(e) {
        res.status(500).json({error: e.message})
    }
})