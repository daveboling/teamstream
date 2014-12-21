'use strict';

var pg = require('../config/postgres/manager');

function Stream(){
}

Stream.create = function(obj, cb){
  pg.query('insert into streams (project_id, name) values ($1, $2)', [obj.projectId, obj.name], cb);
};

Stream.getAll = function(projectId, cb){
  pg.query('select * from get_streams($1)', [projectId], cb);
};

module.exports = Stream;
