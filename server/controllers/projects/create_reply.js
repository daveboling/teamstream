'use strict';

var Joi    = require('joi'),
    Reply = require('../../models/reply');

module.exports = {
  description: 'Create a reply to a given segment',
  tags:['projects', 'reply', 'segment'],
  validate: {
    payload: {
      segId: Joi.number().required(),
      body: Joi.string().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Reply.create(request.payload, request.auth.credentials, function(err, results){
      reply(results.rows[0]).code(err ? 400 : 200);
    });
  }
};
