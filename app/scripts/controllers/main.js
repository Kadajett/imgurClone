'use strict';

/**
 * @ngdoc function
 * @name imgurAdvancedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imgurAdvancedApp
 */
angular.module('imgurAdvancedApp')
    .controller('MainCtrl', function($scope, gallery, imageLoader) {

        function chunk(arr, size) {
            $scope.gallery = [];
            imageLoader.loadImages(arr)
            .then(function(){
              $scope.loaded = true;
            })
            for (var i = 0; i < arr.length; i += size) {
                // var staticI = i;


                $scope.gallery.push(arr.slice(i, i + size));

                // $scope.gallery.push(arr.slice(res, res + size));



            }
            // return newArr;
        }


        var init = function init() {
            gallery.query(function(res) {
                chunk(res, 4);
            })

        }
        $scope.click = function() {

        }

        init();
    });
