const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
const events = [];

app.use(bodyParser.json());

app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("event bus listening on port 4005");
});
