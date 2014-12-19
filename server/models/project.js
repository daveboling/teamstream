'use strict';

var pg = require('../config/postgres/manager');

function Project(){
}

//create project
Project.create = function(obj, user, cb){
  pg.query('insert into projects (project_name, owner_id) values ($1, $2)', [obj.projName, user.id], cb);
};

//display projects
Project.all = function(){

};

//display single project
Project.findOne = function(){

};

module.exports = Project;
