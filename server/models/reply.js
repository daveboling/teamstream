'use strict';

var pg = require('../config/postgres/manager');

function Reply(){
}

Reply.create = function(obj, user, cb){
  pg.query('insert into replys (creator, segment_id, body) values ($1, $2, $3) returning *;', [user.id, obj.segId, obj.body], cb);
};

Reply.populate = function(segmentId, cb){
  pg.query('select * from get_replys($1)', [segmentId], cb);
};

module.exports = Reply;
