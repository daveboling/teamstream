'use strict';

var pg = require('../config/postgres/manager');

function Reply(){
}

Reply.create = function(obj, user, cb){
  pg.query('insert into segments (creator, stream_id, body) values ($1, $2, $3);', [user.id, obj.streamId, obj.body], cb);
};

Reply.populate = function(segmentId, cb){
  pg.query('select * from get_replys($1)', [segmentId], cb);
};

module.exports = Reply;
