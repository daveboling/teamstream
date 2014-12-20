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
});
