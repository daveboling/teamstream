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

Reply.update = function(obj, user, cb){
  pg.query('update replys set body = $1, edited_by = $2, date_edited = now() where id = $3;', [obj.body, user.username, obj.replyId], cb);
};

Reply.delete = function(replyId, cb){
  pg.query('delete from replys where id = $1', [replyId], cb);
};

module.exports = Reply;
