'use strict';

var Hapi               = require('hapi'),
  server               = new Hapi.Server(),
  routes               = require('./routes'),
  plugins              = require('./config/plugins'),
  authentication       = require('./config/authentication'),
  mongoose             = require('mongoose').connect(process.env.DB);

//server config
server.connection({port: process.env.PORT});

//connect socket io
var io = require('socket.io')(server.listener);

/* Whenever a connect is made to socket from the client
   side, that user gains a unique id from SocketIO. This user can emit/listen
   to any event that they are apart of.
*/

io.on('connection', require('./sockets/socket_routes'));

mongoose.connection.once('open', function(){
  server.register(plugins, function(){
    server.auth.strategy('session', 'cookie', true, authentication);
    server.route(routes);
    server.start(function(e){
      server.log('info', server.info.uri);
    });
  });
});


/* This is now a route specific parameter in Hapi 8.0! Put it on the route that you need specifically
  cors: {
    origin: ['http://localhost:8100'], //no wildcards, just allow one person
    credentials: true //will force it to take the cookie
  },
  timeout: {client: 20000}
*/
