const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HgyoDAhd5R6UrtluGLYG94OgRODm2D15shtdkEkqhTxKyRPLocHuYbuLIVYkRvF2guMxBia5KmT2LcAtFgwpb8P00ENnDeDYk')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "NGN"
    });
    
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/commy-ng-e5001/us-central1/api