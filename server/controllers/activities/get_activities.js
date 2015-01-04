'use strict';

 var Joi      = require('joi'),
     Activity = require('../../models/activity');

module.exports = {
  description: 'Get all activities for a certain project.',
  tags:['projects', 'rooms'],
  validate: {
    params: {
      projectId: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    Activity.find({projectId: request.params.projectId}).sort({'date': -1}).limit(25).exec(function(err, activities){
      reply(activities).code(err ? 400 : 200);
    });
  }
};
