'use strict';

var Joi  = require('joi'),
    Project = require('../../models/project');

module.exports = {
  description: 'Get a single project for logged in user',
  tags:['projects'],
  validate: {
    params: {
      pid: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Project.findOne(request.params.pid, function(err, project){
      reply(project).code(err ? 400 : 200);
    });
  }
};
