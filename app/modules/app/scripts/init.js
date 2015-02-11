(function () {
    'use strict';

    var module = angular.module('app', [
        'ui.router',
        'content'
    ]);

    module.config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '',
                    views: {
                        main: {
                            templateUrl: 'templates/app/home.html'
                        }
                    }
                })
        }
    ]);

}());