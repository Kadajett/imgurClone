'use strict';

/**
 * @ngdoc service
 * @name imgurAdvancedApp.album
 * @description
 * # album
 * Factory in the imgurAdvancedApp.
 */
angular.module('imgurAdvancedApp')
  .factory('album', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('https://api.imgur.com/3/gallery/album/:id')
  });
