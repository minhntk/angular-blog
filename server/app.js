var bodyParser = require('body-parser');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var authService = require("./services/AuthService.js")(); 
var BlogRoutes = require('./routes/BlogRoutes.js');
var AuthRoutes = require('./routes/AuthRoutes.js');

var blogRoutes = new BlogRoutes();
var authRoutes = new AuthRoutes();

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(authService.initialize());

app.use(authRoutes.routes);
app.use(blogRoutes.routes);


io.of('/api/chat').on('connection', function(socket){
  console.log('a user connected');

  socket.on('add-message', (message) => {
    console.log(message);
    io.of('/api/chat').emit('message', {type:'new-message', text: message});    
  });
});



app.use('/', express.static(path.join(__dirname, '../dist/')));
app.use('*', express.static(path.join(__dirname, '../dist/')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')))




/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});*/

http.listen(3000, function(){
  console.log('listening on *:3000');
});