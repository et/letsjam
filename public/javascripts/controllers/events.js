angular.module('letsjam.events').controller('EventsController', ['$scope', 'Events', function ($scope, Events) {
  $scope.find = function(query) {
    Events.query(query, function(events) {
      $scope.events = events;
    });
  };
}]);
