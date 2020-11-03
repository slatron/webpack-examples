describe("Safe Class Component Filter Tests > ", function() {
  var safeCssClass;

  beforeEach(module('Example'));
  beforeEach(inject(function(_safeCssClassFilter_) {
    safeCssClass = _safeCssClassFilter_;
  }));

  it("Removes spaces from strings", function() {
    expect(safeCssClass('test string')).toBe('teststring');
  });

  it("Makes classes lowercase", function() {
    expect(safeCssClass('TEsT stRINg')).toBe('teststring');
  });

  it("Removes forbidden characters from strings", function() {
    var disallowedClassChars = '~ ! @ $ % ^ & * ( ) = , . / ; : " ? > < [ ] \ { } | ` #';
    expect(safeCssClass(disallowedClassChars)).toBe('');
  });

});
