'use strict';

var pg = require('../config/postgres/manager');

function Attachment(){
}

Attachment.add = function(segId, url, cb){
  pg.query('insert into attachments (url, segment_id) values ($1, $2)', [url, segId], cb);
};

module.exports = Attachment;
