'use strict';

describe('Service: album', function () {

  // load the service's module
  beforeEach(module('imgurAdvancedApp'));

  // instantiate service
  var album;
  beforeEach(inject(function (_album_) {
    album = _album_;
  }));

  it('should do something', function () {
    expect(!!album).toBe(true);
  });

});
