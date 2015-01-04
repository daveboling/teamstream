'use strict';

var Activity = require('../models/activity');

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
  Activity.create(data, function(err){
    socket.broadcast.emit('updateStreams', data);
    socket.broadcast.emit('projectUpdate');
    socket.emit('projectUpdate');
  });
}

function updateSegments(data){
  var socket = this;
  Activity.create(data, function(err){
    socket.broadcast.emit('updateSegments', data.streamId);
    socket.broadcast.emit('projectUpdate');
    socket.emit('projectUpdate');
  });
}

function updateReplies(data){
  var socket = this;
  Activity.create(data, function(err){
    socket.broadcast.emit('updateReplies', data.streamId);
    socket.broadcast.emit('projectUpdate');
    socket.emit('projectUpdate');
  });
}

function updateStatus(){
  var socket = this;
  socket.broadcast.emit('statusChange');
}
