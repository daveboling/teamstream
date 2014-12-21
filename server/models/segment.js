'use strict';

var pg = require('../config/postgres/manager');

function Segment(){
}

Segment.create = function(obj, user, cb){
  pg.query('insert into segments (creator, stream_id, body) values ($1, $2, $3)', [user.id, obj.streamId, obj.body], cb);
};

//needs to be modified where it also gets attachments
Segment.getAll = function(obj, cb){
  pg.query('select * from get_segments($1)', [obj.sid], cb);
};


module.exports = Segment;
