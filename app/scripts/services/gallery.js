'use strict';

/**
 * @ngdoc service
 * @name imgurAdvancedApp.gallery
 * @description
 * # gallery
 * Factory in the imgurAdvancedApp.
 */
angular.module('imgurAdvancedApp')
  .factory('gallery', function ($resource) {

    return $resource(
        'https://api.imgur.com/3/gallery/hot/viral/:page', {}, {
        query: {
            method: 'GET',
            isArray: true,
            transformResponse: function(res, headers){
                var data = JSON.parse(res);
                return data.data;
            }
        }
    }

    );
  });
