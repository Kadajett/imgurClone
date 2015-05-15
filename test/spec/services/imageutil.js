'use strict';

describe('Service: imageUtil', function () {

  // load the service's module
  beforeEach(module('imgurAdvancedApp'));

  // instantiate service
  var imageUtil;
  beforeEach(inject(function (_imageUtil_) {
    imageUtil = _imageUtil_;
  }));

  it('should do something', function () {
    expect(!!imageUtil).toBe(true);
  });

});
