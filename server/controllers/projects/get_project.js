/* jshint camelcase:false */
'use strict';

var Joi          = require('joi'),
    Project      = require('../../models/project'),
    Room         = require('../../models/room'),
    Collaborator = require('../../models/collaborator'),
    _            = require('underscore');

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
        Collaborator.find(request.auth.credentials.id, request.params.pid, (project[0].owner_id === request.auth.credentials.id), project[0].global_access, function(exists){
          if(exists === false) { return reply().code(401); } //if the project isn't public, disallow

            Room.findOne({projectId: request.params.pid}, function(err, room){
              if(room){
                room.onlineUsers.push(request.auth.credentials.email);
                room.onlineUsers = _.uniq(room.onlineUsers); //no duplicate just in case
                room.save();
              }

              //will work even if socket does not connect and does not affect user experience
              reply(project, room).code(err ? 400 : 200);
            });
        });
    });
  }
};
