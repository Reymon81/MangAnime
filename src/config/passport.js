const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new localStrategy({
    usernameField: 'nick'
}, async (nick, password, done) => {
    const user = await User.findOne({ nick: nick });
    
    if(!user) {
        return done(null, false, {message: 'El usuario no existe'});
    }else{
        const match = await user.matchPassword(password);
        if(match) { 
            
            return done(null, user);
        }else{
            return done(null, false, {message: 'Password incorrecta'});
        }
    }
}));

//si el usuario se loguea se guarda en el id de sesion
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//tomamos los datos del usuario a través del id
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
        
    });    
});