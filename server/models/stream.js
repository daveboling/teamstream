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

Stream.update = function(obj, cb){
  pg.query('update streams set name = $1 where id = $2', [obj.name, obj.streamId], cb);
};

Stream.delete = function(streamId, cb){
  pg.query('delete from streams where id = $1', [streamId], cb);
};

module.exports = Stream;
