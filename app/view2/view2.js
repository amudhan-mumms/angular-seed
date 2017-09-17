'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope) {
	$scope.clickMe = function (){
  		f2(30);
  		console.log("Inside click me ");
  		var a = 1;
  		function f1() {
			a = 10;
			return;
  		}
  		f1();
  		console.log("a is: "+a);
  		var f = function(b){
    		console.log("b is :"+b);
  		}
  		f(20);
  		f2(30);
  		function f2(c){
    		console.log("Function expression");
    		console.log("c is "+c);
  		}
  		var d = 1;//global scope
		function f2 () {
    		var d = 10; // local scope
		}
		f2();
	 	console.log("d is :"+d);
	}

});