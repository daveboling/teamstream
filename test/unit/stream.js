/* jshint expr:true */

'use strict';

var expect       = require('chai').expect,
    Lab          = require('lab'),
    cp           = require('child_process'),
    lab          = exports.lab = Lab.script(),
    Stream      = require('../../server/models/stream'),
    describe     = lab.describe,
    it           = lab.it,
    beforeEach   = lab.beforeEach,
    h            = require('../helpers/helpers'),
    db           = h.getdb();

describe('Stream', function(){
  beforeEach(function(done){
     cp.execFile(__dirname + '/../../scripts/clean-slate.sh', [db], {cwd:__dirname + '/../../scripts'}, function(err, stdout, stderr){
       done();
     });
  });

  describe('constructor', function(){
    it('should construct a new stream', function(done){
      var stream = new Stream();
      expect(stream).to.be.instanceof(Stream);
      done();
    });
  });

  describe('.create', function(){
    it('should create a new stream', function(done){
      //Bob adds a stream to his project
      var payload = {projectId: 1,  name: 'Stream Three'};
      Stream.create(payload, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('.getAll', function(){
    it('should get all streams for a certain project', function(done){
      //Bob adds a stream to his project
      var payload = {pid: 1};
      Stream.getAll(payload.pid, function(err, results){
        expect(err).to.be.null;
        expect(results.rows.length).to.be.above(1);
        done();
      });
    });
  });

  describe('.update', function(){
    it('should update a streams name', function(done){
      var payload = {name: 'Stream Edited!', streamId: 1};
      Stream.update(payload, function(err){
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('.delete', function(){
    it('should delete a specific stream', function(done){
      var params = {streamId: 2};
      Stream.update(params, function(err){
        expect(err).to.be.null;
        done();
      });
    });
  });


});
