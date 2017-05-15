var express = require("express");
var router = express.Router()

module.exports = class BlogRoutes {
    constructor(){
        this.routes = router.get('/api/auth/login', (req, res, next)=>{
            this.login(req, res, next);
        });
    }

    login(req, res, next){
        res.send({});
    }

}