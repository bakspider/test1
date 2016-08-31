var app = angular.module("myApp",[]);

app.controller("myCtrl",['$scope',MyController]);

function MyController($scope){
    $scope.visible = true;
	$scope.toggle = function () {
		$scope.visible = !$scope.visible;		
	};
	
	$scope.class = "glyphicon glyphicon-chevron-down";
	  $scope.changeClass = function(){
		if ($scope.class === "glyphicon glyphicon-chevron-down")
		  $scope.class = "glyphicon glyphicon-chevron-up";
		else
		  $scope.class = "glyphicon glyphicon-chevron-down";
	  };	
}