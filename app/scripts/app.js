'use strict';

/**
 * @ngdoc overview
 * @name imgurAdvancedApp
 * @description
 * # imgurAdvancedApp
 *
 * Main module of the application.
 */
angular
    .module('imgurAdvancedApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.bootstrap'
    ])
    .config(function($routeProvider, $resourceProvider, $stateProvider, $urlRouterProvider) {

        $resourceProvider.defaults.stripTrailingSlashes = false;
        $urlRouterProvider.otherwise("/gallery")
        $stateProvider.state('gallery', {
            url: '/gallery',
            templateUrl: '/views/gallery.list.html',
            controller: 'MainCtrl'
        })
        .state('gallery.image', {
            url: '/:id/:isAlbum',
            controller: function(){

            },
            resolve: {
              container: function($modal){
                var modal = $modal.open({
                  templateUrl: '/views/image.html',
                  controller: 'ImageCtrl',
                  resolve: {
                    box: modal
                  }
                })
                return modal;
              }
            }

        })

        // $routeProvider
        //     .when('/', {
        //         templateUrl: 'views/main.html',
        //         controller: 'MainCtrl'
        //     })
        //     .when('/about', {
        //         templateUrl: 'views/about.html',
        //         controller: 'AboutCtrl'
        //     })
        //     .when('/image', {
        //       templateUrl: 'views/image.html',
        //       controller: 'ImageCtrl'
        //     })
        //     .otherwise({
        //         redirectTo: '/'
        //     });
    })
    .run(function($http) {
        $http.defaults.headers.common.Authorization = 'Client-ID 65cf3d5474e3e74'
    })
