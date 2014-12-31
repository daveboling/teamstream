'use strict';

var Joi     = require('joi'),
     Room   = require('../../models/room');

module.exports = {
  description: 'Get current online users for a specific project.',
  tags:['projects', 'rooms'],
  validate: {
    params: {
      projectId: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    //find a room based on the id, then return the array of users to the front-end
    //timeout is to get the offline time to complete in case of page refresh
    var timer = setTimeout(function(){
      Room.findOne({projectId: request.params.projectId}, function(err, room){
        reply(room.onlineUsers).code(err ? 400 : 200);
      });
      clearTimeout(timer);
    }, 1000);

  }
};
