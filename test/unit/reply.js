/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    Lab        = require('lab'),
    cp         = require('child_process'),
    lab        = exports.lab = Lab.script(),
    Reply      = require('../../server/models/reply'),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    h          = require('../helpers/helpers'),
    db         = h.getdb();


describe('Reply', function(){
  beforeEach(function(done){
     cp.execFile(__dirname + '/../../scripts/clean-slate.sh', [db], {cwd:__dirname + '/../../scripts'}, function(err, stdout, stderr){
       done();
     });
  });

  describe('constructor', function(){
    it('should construct a new reply', function(done){
      var reply = new Reply();
      expect(reply).to.be.instanceof(Reply);
      done();
    });
  });

  describe('.create', function(){
    it('should create a new reply', function(done){
      var payload = {segId: 1, body: 'Adding tests for the Reply model. Woo!'};
      //Bob is adding a reply to Sue's segment
      Reply.create(payload, {id: 1},function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('.populate', function(){
    it('should get all replys for a certain segment', function(done){
      Reply.populate(1, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
});
