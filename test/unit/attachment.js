/* jshint expr:true */

'use strict';

var expect       = require('chai').expect,
    Lab          = require('lab'),
    cp           = require('child_process'),
    lab          = exports.lab = Lab.script(),
    Attachment   = require('../../server/models/attachment'),
    describe     = lab.describe,
    it           = lab.it,
    beforeEach   = lab.beforeEach,
    h            = require('../helpers/helpers'),
    db           = h.getdb();


describe('Attachment', function(){
  beforeEach(function(done){
     cp.execFile(__dirname + '/../../scripts/clean-slate.sh', [db], {cwd:__dirname + '/../../scripts'}, function(err, stdout, stderr){
       done();
     });
  });

  describe('constructor', function(){
    it('should construct a new attachment', function(done){
      var attachment = new Attachment();
      expect(attachment).to.be.instanceof(Attachment);
      done();
    });
  });

  describe('.add', function(){
    it('should create a new attachment', function(done){
      //Adding an attachment Sue's stream
      //Actual upload is handled by the upload helper function, this is merely saving the AWS link
      Attachment.add(2, 'http://www.somefile.com/file.png', function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
});
