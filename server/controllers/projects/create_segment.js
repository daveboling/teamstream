'use strict';

var Joi    = require('joi'),
    Segment = require('../../models/segment');

module.exports = {
  description: 'Create a segment for a given stream',
  tags:['projects', 'streams'],
  validate: {
    payload: {
      streamId: Joi.number().required(),
      body: Joi.string().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Segment.create(request.payload, request.auth.credentials, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
