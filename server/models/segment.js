'use strict';

var pg = require('../config/postgres/manager');

function Segment(){
}

Segment.create = function(obj, user, cb){
  pg.query('insert into segments (creator, stream_id, body) values ($1, $2, $3)', [user.id, obj.streamId, obj.body], cb);
};

module.exports = Segment;
