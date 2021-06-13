const mongoose = require("mongoose");
const { Schema } = mongoose;

//datos que vamos a guardar
const ChatSchema = new Schema({
  nick: { type: String, required: true },
  //room: { type: String, required: true },
  message: { type: String, required: true },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Piece", ChatSchema);