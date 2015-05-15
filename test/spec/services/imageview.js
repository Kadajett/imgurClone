'use strict';

describe('Service: imageView', function () {

  // load the service's module
  beforeEach(module('imgurAdvancedApp'));

  // instantiate service
  var imageView;
  beforeEach(inject(function (_imageView_) {
    imageView = _imageView_;
  }));

  it('should do something', function () {
    expect(!!imageView).toBe(true);
  });

});
