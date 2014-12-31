'use strict';

module.exports = function(socket){
  socket.emit('online');
  socket.on('joinRoom', joinRoom);
  socket.on('updateStreams', updateStreams);
  socket.on('updateSegments', updateSegments);
  socket.on('updateReplies', updateReplies);
  socket.on('userStatusChange', updateStatus);

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

function updateStreams(data){
  var socket = this;
  socket.broadcast.emit('updateStreams', data);
}

function updateSegments(streamId){
  var socket = this;
  socket.broadcast.emit('updateSegments', streamId);
}

function updateReplies(streamId){
  var socket = this;
  socket.broadcast.emit('updateReplies', streamId);
}

function updateStatus(){
  var socket = this,
  timer = setTimeout(function(){   //give this a little padding for go_offline controller to finish
    socket.broadcast.emit('statusChange');
    clearTimeout(timer);
  },1000);
}
