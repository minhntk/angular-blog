var passport = require("passport");  
var passportJWT = require("passport-jwt");  
var Users = require("../repository/Users.js");  
var cfg = require("../config.js");  
var ExtractJwt = passportJWT.ExtractJwt;  
var JwtStrategy = passportJWT.Strategy;  
var jwtOptions  = {  
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function() {  
    var strategy = new JwtStrategy(jwtOptions, function(payload, done) {
        console.log(payload);
        let user = Users.find(function(u) {
            return u.email === payload.email && u.password === payload.password;
        });
        if (user) {
            return done(null, {
                email: user.email
            });
        } else {
            return done(new Error("User not found"), null);
        }
    });
    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};