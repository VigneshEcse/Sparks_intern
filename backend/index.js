const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv/config');

const amtTrans = require("./models/ammountTransfer");
const port = 5000;

app.use(cors());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(5000, () => {
  console.log(`Server is running at port :${port}`);
});
