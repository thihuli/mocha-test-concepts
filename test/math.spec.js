const Math = require('../src/math');
const expect = require('chai').expect;


describe('Math class', function() {
  it('Sum two numbers', function(done) {
    const math = new Math();

    expect(math.sum(5, 5)).to.equal(10);
    done();
  })

  it('Multiply two numbers', function() {
    const math = new Math();

    expect(math.multiply(5, 3)).to.equal(15);
  } )
});