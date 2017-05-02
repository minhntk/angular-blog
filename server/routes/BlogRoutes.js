var express = require("express");
var router = express.Router()
var BlogService = require('../services/BlogService.js');

module.exports = class BlogRoutes {
    constructor(){
        this.blogService = new BlogService();

        this.routes = router.get('/blog', (req, res, next)=>{
            this.getBlog(req, res, next);
        });
    }

    getBlog(req, res, next){
        res.send(this.blogService.getBlog());
    }

}