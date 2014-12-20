'use strict';

//return only the DB port of the process.env.DATABASE_URL variable
exports.getdb = function(){
  return process.env.DATABASE_URL.match(/\/([\w]+$)/)[1];
};

//for when unique numbers needed for password generation
exports.random = function(num){
  return Math.floor(Math.random() * num);
};
