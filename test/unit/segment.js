/* jshint expr:true */

'use strict';

var expect       = require('chai').expect,
    Lab          = require('lab'),
    cp           = require('child_process'),
    lab          = exports.lab = Lab.script(),
    Segment      = require('../../server/models/segment'),
    describe     = lab.describe,
    it           = lab.it,
    beforeEach   = lab.beforeEach,
    h            = require('../helpers/helpers'),
    db           = h.getdb();


describe('Segment', function(){
  beforeEach(function(done){
     cp.execFile(__dirname + '/../../scripts/clean-slate.sh', [db], {cwd:__dirname + '/../../scripts'}, function(err, stdout, stderr){
       done();
     });
  });

  describe('constructor', function(){
    it('should construct a new segment', function(done){
      var segment = new Segment();
      expect(segment).to.be.instanceof(Segment);
      done();
    });
  });

  describe('.create', function(){
    it('should create a new segment', function(done){
      //Bob adds a segment to a stream in his project
      var payload = {streamId: 2, body: 'Test body.'};
      Segment.create(payload, {id: 1}, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('.getAll', function(){
    it('should get all segments for a specific stream', function(done){
      Segment.getAll({sid: 1}, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
});
