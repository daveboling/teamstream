'use strict';

var pg = require('../config/postgres/manager');

function Collaborator(){
}

Collaborator.add = function(projectId, user, cb){
  pg.query('insert into collaborators (project_id, user_id) values ($1, $2)', [projectId, user.id], cb);
};

Collaborator.find = function(userId, projectId, isOwner, isPublic, cb){
  pg.query('select * from collaborators where user_id = $1 and project_id = $2', [userId, projectId], function(err, results){
    var exists = false;
    if(results.rowCount > 0 || isOwner || isPublic){
      exists = true;
    }

    cb(exists);
  });
};

module.exports = Collaborator;
