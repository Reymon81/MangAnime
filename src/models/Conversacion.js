const mongoose = require("mongoose");
const { Schema } = mongoose;

//datos que vamos a guardar
const UserSchema = new Schema({
  nick: { type: String, required: true },
  frase: { type: String, required: true},
});

module.exports = mongoose.model("Conversacion", UserSchema);
