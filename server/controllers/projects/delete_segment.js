'use strict';

var Joi    = require('joi'),
    Segment = require('../../models/segment');

module.exports = {
  description: 'Delete a segment for a given stream',
  tags:['projects', 'segments'],
  validate: {
    params: {
      segId: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Segment.delete(request.params.segId, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
