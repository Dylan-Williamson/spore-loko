const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51ITXeLEUG2WFNVacKn03TBdhxVPsFPhujSD5AxVBGwQuQgEmzalKvUQhD9MlWF1Zaxh58kLyjipLlhNhYMpfvzCG00C9bFZrLt');

// api

// app config
const app = express();
// middlewares
app.use(cors({origin: true}));
app.use(express.json());
// api routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received For', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
});
// listen command
exports.api = functions.https.onRequest(app);