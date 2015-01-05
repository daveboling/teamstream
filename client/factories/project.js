/* jshint camelcase:false */
(function(){
  'use strict';

  var projFactory = angular.module('teamstream');

  projFactory.factory('Project', ['$http', '$upload', function($http, $upload){
    function findOne(projectId){
      return $http.get('/project/'+projectId);
    }

    function addCollaborator(obj){
      return $http.post('/project/collaborator/add', obj);
    }

    function getAll(){
      return $http.get('/projects');
    }

    function getStreams(pid){
      return $http.get('/projects/'+pid+'/streams');
    }

    function getSegments(sid){
      return $http.get('/projects/'+sid+'/segments');
    }

    function createStream(stream){
      return $http.post('/project/stream/create', stream);
    }

    function createSegment(segment){
      return $http.post('/project/segment/create', segment);
    }

    function createReply(reply){
      return $http.post('/project/reply/create', reply);
    }

    function create(project){
      return $http.post('/project/create', project);
    }

    function editSegment(segment){
      return $http.put('/project/segment/edit', segment);
    }

    function editStream(stream){
      return $http.put('/project/stream/edit', stream);
    }

    function editReply(reply){
      return $http.put('/project/reply/edit', reply);
    }

    function deleteSegment(segment){
      return $http.delete('/project/segment/delete/' + segment);
    }

    function deleteStream(streamId){
      return $http.delete('/project/stream/delete/' + streamId);
    }

    function deleteReply(replyId){
      return $http.delete('/project/reply/delete/' + replyId);
    }

    function addAttachment(segId, file){
      return $upload.upload({
            url: '/project/attachment/add/'+segId,
            method: 'POST',
            file: file
      });
    }

    function toggleArchive(segment){
      return $http.put('/project/segment/archive', {segId: segment.id, is_archived: segment.is_archived});
    }

    function getArchivedSegments(sid){
      return $http.get('/project/segment/archive/'+sid);
    }

    return {
      getAll: getAll,
      getStreams: getStreams,
      getSegments: getSegments,
      createStream: createStream,
      createSegment: createSegment,
      createReply: createReply,
      create: create,
      findOne: findOne,
      editSegment: editSegment,
      editReply: editReply,
      editStream: editStream,
      deleteSegment: deleteSegment,
      deleteStream: deleteStream,
      deleteReply: deleteReply,
      addCollaborator: addCollaborator,
      addAttachment: addAttachment,
      toggleArchive: toggleArchive,
      getArchivedSegments: getArchivedSegments
    };
  }]);
})();
