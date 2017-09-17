'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider, $timepickerProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

  
}])

.controller('View1Ctrl', function($scope) {
	var id = 0;
	$scope.addClient = function() {
  		var clientId = id++;
  		var client = {};
  		$scope.client.id = clientId++;
  		console.log("***** Details *****:");
  		console.log("Name: "+$scope.client.name);
  		console.log("Name: "+$scope.client.age);
  		console.log("Name: "+$scope.time);
  		console.log("Name: "+$scope.duration);
  		var time = moment($scope.time);
  		var dur = moment($scope.duration);
  		console.log("time isvalid "+time.isValid());
  		console.log("time : hour "+time.get('hour'));
  		var durResult = time.add(dur.get('hour'),'hour');
  		durResult = durResult.add(dur.get('minutes'),'minutes');
  		console.log("end time "+durResult.get('hour')+":"+durResult.get('minutes'))

	}
	

});