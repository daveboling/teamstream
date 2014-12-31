'use strict';

 var Joi     = require('joi'),
     Room    = require('../../models/room'),
     _       = require('underscore');

module.exports = {
  description: 'Remove a user from a project socket on disconnect.',
  tags:['projects', 'rooms'],
  validate: {
    payload: {
      email: Joi.string().required()
    },
    params: {
      projectId: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    //find and update the room, remove the user based on email and room ids, save
    Room.findOne({projectId: request.params.projectId}, function(err, room){
      //find index of email
      var index = _.indexOf(room.onlineUsers, request.payload.email);
      if(index){
        room.onlineUsers.splice(index, 1);
        room.save();
      }

      reply().code(200);
    });
  }
};
