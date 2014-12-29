'use strict';

var Joi    = require('joi'),
    Segment = require('../../models/segment');

module.exports = {
  description: 'Edit a segment for a given stream',
  tags:['projects', 'streams'],
  validate: {
    payload: {
      segmentId: Joi.number().required(),
      body: Joi.string().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Segment.update(request.payload, request.auth.credentials, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
