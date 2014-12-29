'use strict';

var Joi    = require('joi'),
    Reply = require('../../models/reply');

module.exports = {
  description: 'Delete a reply',
  tags:['projects', 'replies'],
  validate: {
    payload: {
      replyId: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Reply.delete(request.payload.replyId, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
