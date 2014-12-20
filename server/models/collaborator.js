'use strict';

var pg = require('../config/postgres/manager');

function Collaborator(){
}

Collaborator.add = function(projectId, user, cb){
  pg.query('insert into collaborators (project_id, user_id) values ($1, $2)', [projectId, user.id], cb);
};


module.exports = Collaborator;
