'use strict';

/**
 * @ngdoc service
 * @name imgurAdvancedApp.imageLoader
 * @description
 * # imageLoader
 * Factory in the imgurAdvancedApp.
 */
angular.module('imgurAdvancedApp')
    .factory('imageLoader', function($q) {

        var business = function business(image) {
            var defer = $q.defer();

            var loading = new Image();
            loading.src = getImageSrc(image);
            if (loading.complete) {

                defer.resolve();

            } else {

                loading.addEventListener('load', function() {
                    defer.resolve();
                });

                loading.addEventListener('error', function() {
                    defer.reject();
                });
            }


            return defer.promise;
        }

        var getImageSrc = function getImageSrc(image) {
            if (image.is_album && image.cover) {
                return "http://i.imgur.com/" + image.cover + 'm.png';
            } else if (image.id) {
                return "http://i.imgur.com/" + image.id + 'm.png';
            } else {
                return "http://placehold.it/300&text=+"
            }


        }
        return {
            loadImages: function isImage(arraySrc) {

                var promises = [];
                angular.forEach(arraySrc, function(value, key) {
                    promises.push(business(value));
                });

                return $q.all(promises)
            }
        };
    });
