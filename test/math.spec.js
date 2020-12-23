const assert = require('assert');
const Math = require('../src/math');


describe('Math class', function() {
  it('Sum two numbers', function(done) {
    const math = new Math();

    assert.equal(math.sum(5, 5), 10);
    done();
  })

  it('Multiply two numbers', function() {
    const math = new Math();

    assert.equal(math.multiply(5, 3), 15);
  } )
});