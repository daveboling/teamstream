'use strict';

var Stream = require('../../models/stream'),
    Joi    = require('joi');

module.exports = {
  description: 'Get all streams for a specific project',
  tags:['streams', 'project'],
  auth: {mode: 'required'},
  validate: {
    params: {
      pid: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Stream.getAll(request.params.pid, function(err, stream){
      reply(stream.rows).code(err ? 400 : 200);
    });
  }
};
