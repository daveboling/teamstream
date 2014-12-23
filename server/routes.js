'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',         config: require('./controllers/static/angular')},
  {method: 'post',   path: '/register',         config: require('./controllers/users/register')},
  {method: 'post',   path: '/login',            config: require('./controllers/users/login')},
  {method: 'delete', path: '/logout',           config: require('./controllers/users/logout')},
  {method: 'get',    path: '/status',           config: require('./controllers/users/status')},
  {method: 'get',    path: '/projects',         config: require('./controllers/projects/get_projects')},
  {method: 'get',    path: '/projects/{pid}',   config: require('./controllers/projects/get_project')},
  {method: 'get',    path: '/projects/{pid}/streams', config: require('./controllers/projects/get_streams')},
  {method: 'get',    path: '/projects/{sid}/segments', config: require('./controllers/projects/get_segments')},
  {method: 'post',   path: '/project/stream/create', config: require('./controllers/projects/create_stream')},
  {method: 'post',   path: '/project/segment/create', config: require('./controllers/projects/create_segment')},
  {method: 'post',   path: '/project/reply/create', config: require('./controllers/projects/create_reply')}
];
