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
    console.log(request.payload);
    Reply.create(request.payload, request.auth.credentials, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
