'use strict';

var Segment = require('../../models/segment'),
    Joi    = require('joi');

module.exports = {
  description: 'Get all segments for a specific stream',
  tags:['streams', 'segments', 'project'],
  auth: {mode: 'required'},
  validate: {
    params: {
      sid: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Segment.getAll(request.params, function(err, segments){
      reply(segments).code(err ? 400 : 200);
    });
  }
};
