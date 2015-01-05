/* jshint camelcase:false */
'use strict';

var Joi    = require('joi'),
    Segment = require('../../models/segment');

module.exports = {
  description: 'Archive a segment.',
  tags:['projects', 'segments'],
  validate: {
    payload: {
      segId: Joi.number().required(),
      is_archived: Joi.boolean().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Segment.toggleArchive(request.payload.segId, request.payload.is_archived, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
