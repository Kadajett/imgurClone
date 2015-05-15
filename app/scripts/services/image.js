'use strict';

/**
 * @ngdoc service
 * @name imgurAdvancedApp.image
 * @description
 * # image
 * Service in the imgurAdvancedApp.
 */
angular.module('imgurAdvancedApp')
    .factory('image', function($resource) {


        return $resource(
            'https://api.imgur.com/3/gallery/image/:id'
        );
    });
