'use strict';

var Joi     = require('joi'),
    Project = require('../../models/project'),
    Room    = require('../../models/room');

module.exports = {
  description: 'Get a single project for logged in user and join its socket.',
  tags:['projects'],
  validate: {
    params: {
      pid: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Project.findOne(request.params, function(project, streams, err){
      Room.findOne({projectId: request.params.pid}, function(err, room){
        console.log('room', room);
        if(room){
          room.onlineUsers.push(request.auth.credentials.email);
          room.save();
        }

        //will work even if socket does not connect and does not affect user experience
        reply(project).code(err ? 400 : 200);
      });
    });
  }
};
