(function(angular) {
	// route configuration for app
	angular.module('base.sas.route',['ngRoute'])
			.config(function($routeProvider) {
				$routeProvider
					.when('/', {
						templateUrl: 'html/pageTopics.html'
						
					})
					.when('/practiceExam',{
						templateUrl: '/Base-SAS-Certification/html/pageTopics.html'
					})
					.when('/queByTopics',{
						templateUrl: '/Base-SAS-Certification/html/pageTopics.html'
					})
					.otherwise({
						redirectTo: '/'
					})

				
			});
})(angular);