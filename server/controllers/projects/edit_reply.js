'use strict';

var Joi    = require('joi'),
    Reply = require('../../models/reply');

module.exports = {
  description: 'Edit a reply',
  tags:['projects', 'replies'],
  validate: {
    payload: {
      replyId: Joi.number().required(),
      body: Joi.string().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Reply.update(request.payload, request.auth.credentials, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
