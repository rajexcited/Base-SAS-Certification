var timerElementObj, notifyTimes = [5];

// angular constructor
(function () {
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
})();

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

