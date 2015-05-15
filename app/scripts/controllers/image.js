'use strict';

/**
 * @ngdoc function
 * @name imgurAdvancedApp.controller:ImageCtrl
 * @description
 * # ImageCtrl
 * Controller of the imgurAdvancedApp
 */
angular.module('imgurAdvancedApp')
    .controller('ImageCtrl', function($scope, $modalInstance, $stateParams, $state, image, album, $sceDelegate) {

        var init = function init() {


          getImages();
        }

        var getImages = function getImages() {
            // $scope.container = container;
            if ($stateParams.isAlbum == "true") {
                album.get({
                    id: $stateParams.id
                }, function(res) {
                    $scope.album = res.data;
                })
            } else {
                image.get({
                    id: $stateParams.id
                }, function(res) {
                    // res.data.link = $sceDelegate.trustAs(res.data.link)
                    // res.data.mp4 = $sceDelegate.trustAs(res.data.mp4)
                    $scope.placeholerUrl = 'http://placehold.it/' + res.data.width + 'x' + res.data.height;
                    $scope.image = res.data;
                })
            }
        }
        init();
    });
