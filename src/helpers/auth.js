const helpers = { };

helpers.isAuthenticated = (req, res) =>{
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'debe loguearse');
    res.redirect('/users/signin');
}

module.exports = helpers;