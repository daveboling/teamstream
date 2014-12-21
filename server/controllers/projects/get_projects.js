'use strict';

var Project = require('../../models/project');

module.exports = {
  description: 'Get all projects for logged in user',
  tags:['projects'],
  auth: {mode: 'required'},
  handler: function(request, reply){
    Project.all(request.auth.credentials, function(err, projects){
      reply(projects.rows).code(err ? 400 : 200);
    });
  }
};
