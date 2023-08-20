// normally called app.js, etc. I decided to keep default, index.js

const express = require("express");
const app = express();

app.use(express.json());
var cors = require("cors");

// app.use(cors());

// app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ['https://chic-kitsune-7beb31.netlify.app/'], credentials: true }))


let dreamController = require("./controllers/dreamController");
app.use("/dreams", dreamController);

app.get("/", (req, res) => {
    res.send("This is an App to Log your Dreams");
  });



  
  app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found!" });
  });


module.exports = app

