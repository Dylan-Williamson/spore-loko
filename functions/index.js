const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({origin: true});
const one ="sk_test_51ITXeLEUG2WFNVacKn03TBdhxVPsFPhujSD5AxVBGwQuQgEmzal";
const two = "KvUQhD9MlWF1Zaxh58kLyjipLlhNhYMpfvzCG00C9bFZrLt";
const stripe = require("stripe")(one+two);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors);
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
