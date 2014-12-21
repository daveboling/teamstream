'use strict';

var pg = require('../config/postgres/manager');

function Project(){
}

//create project
Project.create = function(obj, user, cb){
  pg.query('insert into projects (project_name, owner_id) values ($1, $2)', [obj.projName, user.id], cb);
};

//display projects
Project.all = function(user, cb){
  //this will need join on collaborators and user w/ gravatar images
  //emails to be added at a later time
  pg.query('select * from get_projects($1)', [user.id], cb);
};

//display single project
Project.findOne = function(){
  //this will need to be thought about a little bit

};

module.exports = Project;
