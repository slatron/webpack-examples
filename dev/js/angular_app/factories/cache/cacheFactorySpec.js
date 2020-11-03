describe("Cache Factory Unit Tests > ", function() {
  var cacheFactory;

  beforeEach(module('Example'));
  beforeEach(inject(function(_cacheFactory_) {
    cacheFactory = _cacheFactory_;
    cacheFactory.set('test_key', 'test_data');
  }));

  afterEach(function() {
    cacheFactory.removeFromLocalStorage('REDIRECT_TARGET');
  });

  it("Returns null for missing keys", function() {
    var missingValue = cacheFactory.get('are_you_there');
    expect(missingValue).toBe(null);
  });

  it("Returns data for given key", function() {
    var value = cacheFactory.get('test_key');
    expect(value).toBe('test_data');
  });

  it("Converts non-string values to Stringified JSON before storing", function() {
    var object = {test: 'foo', test2: 'bar'};
    var collection = ['foo', 'bar', 1, 2, 3, 4];

    cacheFactory.set('object', object);
    cacheFactory.set('collection', collection);

    var cachedObject = angular.fromJson(cacheFactory.get('object'));
    var cachedCollection =  angular.fromJson(cacheFactory.get('collection'));

    expect(cachedObject).toEqual(object);
    expect(cachedCollection).toEqual(collection);
  });

  it("Removes individual keys from cache", function() {
      expect(cacheFactory.get('test_key')).toBe('test_data');
      cacheFactory.removeFromLocalStorage('test_key');
      expect(cacheFactory.get('test_key')).toBe(null);
  });

  it("Clears all keys except REDIRECT_TARGET on clear method", function() {
    cacheFactory.set('REDIRECT_TARGET', 'http://target.html');

    expect(cacheFactory.get('test_key')).toBe('test_data');
    expect(cacheFactory.get('REDIRECT_TARGET')).toBe('http://target.html');

    cacheFactory.clearLocalStorage();

    expect(cacheFactory.get('test_key')).toBe(null);
    expect(cacheFactory.get('REDIRECT_TARGET')).toBe('http://target.html');
  });

});
