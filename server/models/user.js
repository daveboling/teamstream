'use strict';

var bcrypt  = require('bcrypt'),
    pg      = require('../config/postgres/manager');

function User(obj){
  this.username = obj.username;
}

User.register = function(obj, cb){
  var user = new User(obj);
  user.password = bcrypt.hashSync(obj.password, 8);
  user.email = obj.email;
  pg.query('insert into users (username, password, email) values ($1, $2, $3) returning id', [user.username, user.password, user.email], function(err, results){
    if(err){return cb(true);}
    cb(err);
  });
};

User.login = function(obj, cb){
  pg.query('select * from users where username = $1 limit 1', [obj.username], function(err, results){
    if(err || !results.rowCount){return cb();}
    var isAuth = bcrypt.compareSync(obj.password, results.rows[0].password);
    if(!isAuth){return cb();}
    var user = results.rows[0];
    delete user.password;
    cb(user);
  });
};


module.exports = User;
