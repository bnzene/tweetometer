'use strict';

var http = require('http');
var server = http.createServer(function(request,response) {

});

server.listen(8080, '127.0.0.1', function(){
  console.log((new Date()) + 'Server is listening on port 8080');
});

var WebSocketServer = require('websocket').server;
var wsServer = new WebSocketServer({
  httpServer: server
});

var count = 0;
var clients = {};

wsServer.on('request', function(r){
  var connection = r.accept('echo-protocol', r.origin);
  var id = count++;
  clients[id] = connection;
  console.log((new Date()) + ' Connection accepted [' + id + ']');

  connection.on('message', function(message){
    var msgString = message.utf8Data;

    for(var i in clients){
      clients[i].sendUTF(msgString);
    }
  });

  connection.on('close', function(reasonCode, description) {
    delete clients[id];
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});
