const mongoose = require('mongoose');
const { Schema } = mongoose;
//modulo para encriptar passwords
const bcrypt = require('bcryptjs');

//datos que vamos a guardar
const UserSchema = new Schema({
    nick: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
})

//metodo de encriptacion asincrono que devuelve la password cifrada
UserSchema.methods.encryptPassword = async (password) => {    
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

//metodo para comparar la password con la cifrada
UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);