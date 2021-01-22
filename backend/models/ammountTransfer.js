const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const amtTrans = new Schema({
  fromUser: {
    type: String,
    required: true,
    unique: true,
  },
  toUser: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const amtTrans = mongoose.model("amtTrans", amtTrans);

module.exports = amtTrans;
