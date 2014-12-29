'use strict';

var Joi    = require('joi'),
    Stream = require('../../models/stream');

module.exports = {
  description: 'Delete a stream',
  tags:['projects', 'streams'],
  validate: {
    params: {
      streamId: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Stream.delete(request.params.streamId, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
