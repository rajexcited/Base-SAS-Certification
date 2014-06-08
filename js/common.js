var timerElementObj, notifyTimes = [5];

// angular constructor
(function (angular) {
	angular.module('base.sas.app',['base.sas.route'])
			.controller('baseCtrl', function($scope,$window,$location){
				console.log($location.path());
				alert($location.absUrl());
				$scope.goToPage = function (url) {
					$window.location.href = url;
				}
				$scope.changeView = function (event,attr) {
					console.log('changing changeView');
					//$location.path('#'+url);
				}
			})
			.controller('PageTopicsController', function($scope){
				console.log('init PageTopicsController');
			});

	// with timer - later to be used
	angular.module('bspApp',['timer'])
			.controller('timeController',function($scope,$timeout,$log) {
				$scope.$on('timer-tick',function (event,args) {
					$timeout(function() {
						// notify on specified time and do soemthing
						var ticks = args.millis/1000;
						notifyTimes.forEach(function (item, index, list) {
							if(item === ticks) {								
								warningRedToggle(list,index,ticks);	
							}
						});
					});
				})
				$scope.examTimeSeconds = 75*60;	// 60 minutes
			})
			.filter('twoDigit',function() {
				return function(num) {
					num = num ? num : '';
					return ("00"+num).slice(-2);
				};
			});
})(angular);

function countdownAction (actionTag) {
	if(!timerElementObj) {
		timerElementObj = document.getElementsByTagName('timer')[0];
	}

	try {
		timerElementObj[actionTag]();
	} catch(e) {}
}

function warningRedToggle(list,index,oldTime) {
	var toggleTime=1;
	list[index] = oldTime-toggleTime;
}


/*	home page	*/

function close () {
	alert(navigator.app);
	alert(navigator.device);
}

