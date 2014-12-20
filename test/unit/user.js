/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    Lab        = require('lab'),
    cp         = require('child_process'),
    lab        = exports.lab = Lab.script(),
    User       = require('../../server/models/user'),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    h          = require('../helpers/helpers'),
    db         = h.getdb();


describe('User', function(){
  beforeEach(function(done){
     cp.execFile(__dirname + '/../../scripts/clean-slate.sh', [db], {cwd:__dirname + '/../../scripts'}, function(err, stdout, stderr){
       done();
     });
  });

  describe('constructor', function(){
    it('create a User object', function(done){
      var user = new User({username: 'bobby'});
      expect(user.username).to.equal('bobby');
      expect(user).to.be.instanceof(User);
      done();
    });
  });

  describe('.register', function(){
    it('should register a new user', function(done){
      var payload = {username: 'sam', password: '1234'};
      User.register(payload, function(err){
        expect(err).to.be.null;
        done();
      });
    });

    it('should NOT allow a new user if user already exists', function(done){
      var payload = {username: 'bob', password: '1234'};
      User.register(payload, function(err){
        expect(err).to.be.true;
        done();
      });
    });
  });

  describe('.login', function(){
    it('should NOT allow an improper password/username', function(done){
      var payload = {username: 'bob', password: '123'};
      User.login(payload, function(user){
        expect(user).to.be.undefined;
        done();
      });
    });

    it('should login an existing user', function(done){
      var payload = {username: 'bob', password: '1234'};
      User.login(payload, function(user){
        expect(user.username).to.equal('bob');
        done();
      });
    });
  });

});
