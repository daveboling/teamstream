/* jshint expr:true */

'use strict';

var expect       = require('chai').expect,
    Lab          = require('lab'),
    cp           = require('child_process'),
    lab          = exports.lab = Lab.script(),
    Collaborator = require('../../server/models/collaborator'),
    describe     = lab.describe,
    it           = lab.it,
    beforeEach   = lab.beforeEach,
    h            = require('../helpers/helpers'),
    db           = h.getdb();


describe('Collaborator', function(){
  beforeEach(function(done){
     cp.execFile(__dirname + '/../../scripts/clean-slate.sh', [db], {cwd:__dirname + '/../../scripts'}, function(err, stdout, stderr){
       done();
     });
  });

  describe('constructor', function(){
    it('should construct a new collaborator', function(done){
      var collaborator = new Collaborator();
      expect(collaborator).to.be.instanceof(Collaborator);
      done();
    });
  });

  describe('.add', function(){
    it('should create a new collaborator', function(done){
      //add Bob to Sue's project(id = 2)
      Collaborator.add(2, {id: 2}, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
});
