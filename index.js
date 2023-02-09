// normally called app.js, etc. I decided to keep default, index.js

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
