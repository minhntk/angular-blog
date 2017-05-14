var express = require('express');
var app = express();
var path = require('path');
var BlogRoutes = require('./routes/BlogRoutes.js');

var blogRoutes = new BlogRoutes();
app.use(blogRoutes.routes);
app.use('/', express.static(path.join(__dirname, '../dist/')));
app.use('*', express.static(path.join(__dirname, '../dist/')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});