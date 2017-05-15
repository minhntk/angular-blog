var bodyParser = require('body-parser');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var BlogRoutes = require('./routes/BlogRoutes.js');
var AuthenticationRoutes = require('./routes/AuthenticationRoutes.js');

var blogRoutes = new BlogRoutes();
var authenticationRoutes = new AuthenticationRoutes();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(blogRoutes.routes);
app.use(authenticationRoutes.routes);

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