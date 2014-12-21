'use strict';

var pg     = require('../config/postgres/manager'),
    async  = require('async'),
    Reply  = require('./reply');

function Segment(){
}

Segment.create = function(obj, user, cb){
  pg.query('insert into segments (creator, stream_id, body) values ($1, $2, $3)', [user.id, obj.streamId, obj.body], cb);
};

//needs to be modified where it also gets attachments
Segment.getAll = function(obj, cb){
  pg.query('select * from get_segments($1)', [obj.sid], function(err, results){
    if(err){return cb(err);}
    async.map(results.rows, iterator, function(err, segments){
      if(err){return cb(err);}
      cb(null, segments);
    });
  });
};

module.exports = Segment;

function iterator(row, cb){
  Reply.populate(row.id, function(err, replys){
    row.replys = replys.rows;
    cb(err, row);
  });
}


