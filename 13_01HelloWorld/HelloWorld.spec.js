const helloWorld = require('./HelloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(HelloWorld()).toEqual('Hello, World!');
  });
});

