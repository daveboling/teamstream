'use strict';

var Joi          = require('joi'),
    Collaborator = require('../../models/collaborator'),
    User         = require('../../models/user');

module.exports = {
  description: 'Add a user to a project.',
  tags:['projects', 'collaborators'],
  validate: {
    payload: {
      email: Joi.string().required(),
      projectId: Joi.number().required()
    }
  },
  auth: {mode: 'required'},
  handler: function(request, reply){
    console.log(request.payload);
    User.findOne(request.payload.email, function(userErr, results){
      console.log(results);
      if(userErr){reply().code(404);} //return 404 if no user found
      else {
        Collaborator.add(request.payload.projectId, results.rows[0], function(colErr){
          reply().code(colErr ? 400 : 200);
        });
      }
    });
  }
};
