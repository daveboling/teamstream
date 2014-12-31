'use strict';

var Joi  = require('joi'),
    Attachment = require('../../models/attachment');

module.exports = {
  description: 'Upload a Photo',
  tags:['notes'],
  cors: {origin: ['http://localhost:8100'],credentials: true},
  validate: {
    params: {
      segId: Joi.number().required()
    }
  },
  payload:{
    maxBytes: 4194304, // 2^22 ; 4MB
    output:'stream',
    parse: true,
    timeout: 60000
  },
  handler: function(request, reply){
    console.log(request.payload.file, request.payload.file.hapi.filename);
    Attachment.upload(request.payload.file, request.payload.file.hapi.filename, request.params.segId, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
