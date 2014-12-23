'use strict';

var Joi     = require('joi'),
    Project = require('../../models/project'),
    Room    = require('../../models/room');

module.exports = {
  description: 'Create a project. Will also create a room with the projectId in Socket.IO',
  tags:['projects'],
  validate: {
    payload: {
      projName: Joi.string().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Project.create(request.payload, request.auth.credentials, function(err, results){
      //create room for the socket
      var room = new Room({projectId: results.rows[0].id});
      room.save(function(sockErr){
        reply(results.rows[0]).code(err ? 400 : 200);
      });
    });
  }
};
