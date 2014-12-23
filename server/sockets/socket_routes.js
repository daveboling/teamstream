'use strict';

module.exports = function(socket){
  socket.emit('online');
  socket.on('joinRoom', joinRoom);
  socket.on('testAlert', testAlert);

  // *** SOCKET LOGGING *** //
  console.log('Socket Connected:', socket.id);

  socket.on('disconnect', function(){
    console.log('Socket Disconnected:', socket.id);
  });

  console.log('Active Sockets:', this.sockets.length);
};

//joins a logged in user to a project
function joinRoom(data){
  var socket = this;
  socket.join(data.projectId);
}

function testAlert(data){
  var socket = this;
  socket.broadcast.emit('alertMessage', data.message);
}
