'use strict';

// var Joi     = require('joi'),
//     Room    = require('../../models/room');

module.exports = {
  description: 'Remove a user from a project socket on disconnect.',
  tags:['projects', 'rooms'],
  validate: {
    payload: {}
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    //find and update the room, remove the user based on email, save
    reply();
  }
};
