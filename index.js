// normally called app.js, etc. I decided to keep default, index.js

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

// app.use(cors());

var corsOptions = {
  origin: 'https://dreamjournal.bio',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/dreams', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
app.get('/dreams/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

// app.use(express.urlencoded({ extended: true }));


let dreamController = require("./controllers/dreamController");
app.use("/dreams", dreamController);

app.get("/", (req, res) => {
    res.send("This is an App to Log your Dreams");
  });



  
  app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found!" });
  });


module.exports = app

