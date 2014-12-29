'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',                         config: require('./controllers/static/angular')},
  {method: 'post',   path: '/register',                         config: require('./controllers/users/register')},
  {method: 'post',   path: '/login',                            config: require('./controllers/users/login')},
  {method: 'delete', path: '/logout',                           config: require('./controllers/users/logout')},
  {method: 'get',    path: '/status',                           config: require('./controllers/users/status')},
  {method: 'get',    path: '/projects',                         config: require('./controllers/projects/get_projects')},
  {method: 'get',    path: '/project/{pid}',                    config: require('./controllers/projects/get_project')},
  {method: 'get',    path: '/projects/{pid}/streams',           config: require('./controllers/projects/get_streams')},
  {method: 'get',    path: '/projects/{sid}/segments',          config: require('./controllers/projects/get_segments')},
  {method: 'post',   path: '/project/create',                   config: require('./controllers/projects/create_project')},
  {method: 'post',   path: '/project/stream/create',            config: require('./controllers/projects/create_stream')},
  {method: 'delete', path: '/project/stream/delete/{streamId}', config: require('./controllers/projects/delete_stream')},
  {method: 'post',   path: '/project/segment/create',           config: require('./controllers/projects/create_segment')},
  {method: 'put',    path: '/project/segment/edit',             config: require('./controllers/projects/edit_segment')},
  {method: 'delete', path: '/project/segment/delete/{segId}',   config: require('./controllers/projects/delete_segment')},
  {method: 'post',   path: '/project/reply/create',             config: require('./controllers/projects/create_reply')},
  {method: 'put',    path: '/project/reply/edit',               config: require('./controllers/projects/edit_reply')},
  {method: 'delete', path: '/project/reply/delete/{replyId}',   config: require('./controllers/projects/delete_reply')},
  {method: 'put',    path: '/socket/offline',                   config: require('./controllers/rooms/go_offline')}
];
