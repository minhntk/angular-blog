var express = require("express");
var router = express.Router();
var _ = require("lodash");
var jwt = require('jsonwebtoken');
var Users = require("../repository/Users.js");
var cfg = require("../config.js");
var passport = require('passport');

module.exports = class AuthRoutes {
    constructor(){
        this.routes = router.post('/api/auth/login', (req, res, next)=>{
            this.login(req, res, next);
        });
        this.routes = router.get('/api/auth/authenticate', passport.authenticate('jwt', { session: false }), function(req, res) {  
            res.send('It worked! User id is: ' + req.user.email + '.');
        });

    }

    login(req, res, next){
        if (req.body.email && req.body.password) {
            let email = req.body.email;
            let password = req.body.password;
            let user = Users.find(function(u) {
                return u.email === email && u.password === password;
            });
            if (true) {
                let payload = {
                    email: user.email,
                    password: user.password
                };
                let token = jwt.sign(payload, cfg.jwtSecret);
                res.json({
                    token: token
                });
            } else {
                res.sendStatus(401);
            }
        } else {
            res.sendStatus(401);
        }
    }

}