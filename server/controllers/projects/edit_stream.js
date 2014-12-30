'use strict';

var Joi    = require('joi'),
    Stream = require('../../models/stream');

module.exports = {
  description: 'Edit a stream name.',
  tags:['projects', 'streams'],
  validate: {
    payload: {
      streamId: Joi.number().required(),
      name: Joi.string().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Stream.update(request.payload, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
