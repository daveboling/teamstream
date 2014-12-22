'use strict';

var Joi    = require('joi'),
    Stream = require('../../models/stream');

module.exports = {
  description: 'Create a stream for a given project',
  tags:['projects', 'streams'],
  validate: {
    payload: {
      projectId: Joi.number().required(),
      name: Joi.string().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Stream.create(request.payload, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
