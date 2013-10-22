angular.module('letsjam.events').controller('EventsController', ['$scope', 'Events', function ($scope, Events) {

  var markers = [];

  $scope.find = function(query) {
    Events.query(query, function(events) {
      $scope.events = events;
      angular.forEach(events, function(value, key) {
        var venue = value.venue;
        markers.push({
          lat: parseFloat(venue.location["geo:point"]["geo:lat"])
        , lng: parseFloat(venue.location["geo:point"]["geo:long"])
        , message: value.title
        });
      });
    });
  };

  angular.extend($scope, {
    boulder: {
      lat: 40.02931
    , lng: -105.239977
    , zoom: 10
    }
  , markers: markers
  });
}]);
