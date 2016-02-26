var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Log = require('log')
  , log = new Log('debug')

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('stream', function(image){
      socket.broadcast.emit('stream', image);
  })
});


http.listen(3000, function(){
  console.log('listening on *:3000');
  log.info('Servidor escuchando a traves del puerto %s', 3000)
});