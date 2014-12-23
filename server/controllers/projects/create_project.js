'use strict';

var Joi    = require('joi'),
    Project = require('../../models/project');

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
    console.log('stuff');
    Project.create(request.payload, request.auth.credentials, function(err, results){
      reply(results.rows[0]).code(err ? 400 : 200);
    });
  }
};
