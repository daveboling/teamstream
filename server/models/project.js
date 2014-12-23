'use strict';

var pg     = require('../config/postgres/manager'),
    Stream = require('./stream');

function Project(){
}

//create project
Project.create = function(obj, user, cb){
  pg.query('insert into projects (project_name, owner_id) values ($1, $2) returning *', [obj.projName, user.id], function(err, results){
    cb(err, results);
  });
};

//display projects
Project.all = function(user, cb){
  //this will need join on collaborators and user w/ gravatar images
  //emails to be added at a later time
  pg.query('select * from get_projects($1)', [user.id], cb);
};

//display single project
Project.findOne = function(obj, cb){
  pg.query('select * from projects where projects.id = $1', [obj.pid], function(errProj, project){
    Stream.getAll(obj.pid, function(errStream, streams){
      cb(project.rows, streams.rows);
    });
  });
};

module.exports = Project;
