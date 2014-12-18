'use strict';

var Hapi         = require('hapi'),
  server         = new Hapi.Server(),
  routes         = require('./routes'),
  plugins        = require('./config/plugins'),
  authentication = require('./config/authentication');

//server config
server.connection({port: process.env.PORT});

//register server plugins
server.register(plugins, function(){
  server.auth.strategy('session', 'cookie', true, authentication);
  server.route(routes);
  server.start(function(e){
    server.log('info', server.info.uri);
  });
});


/* This is now a route specific parameter in Hapi 8.0! Put it on the route that you need specifically
  cors: {
    origin: ['http://localhost:8100'], //no wildcards, just allow one person
    credentials: true //will force it to take the cookie
  },
  timeout: {client: 20000}
*/
