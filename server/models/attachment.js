'use strict';

var pg = require('../config/postgres/manager'),
    AWS    = require('aws-sdk'),
    concat = require('concat-stream');

function Attachment(){
}

Attachment.add = function(segId, url, cb){
  pg.query('insert into attachments (url, segment_id) values ($1, $2)', [url, segId], cb);
};

Attachment.upload = function(file, name, segId, cb){
  var s3   = new AWS.S3(),
  url = 'https://s3.amazonaws.com/' + process.env.AWS_BUCKET + '/' + segId + '/' + name;

  Attachment.add(segId, url, function(err, results){
  if(err){return cb(err);}

    file.pipe(concat(function(buf){
      var params = {Bucket: process.env.AWS_BUCKET, Key: segId + '/' + name, Body: buf, ACL: 'public-read'};
      s3.putObject(params, cb);
    }));
  });

};


module.exports = Attachment;
