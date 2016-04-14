'use strict';

var expect = require('chai').expect;


describe('pick-key: ', function () {

  var pickKey = require('../../');

  it('common', function () {

    expect(pickKey()).to.be.undefined;
    expect(pickKey(null)).to.be.null;
    expect(pickKey(1)).to.be.equal(1);
    expect(pickKey('a')).to.be.equal('a');

    expect(pickKey([])).to.be.undefined;

    expect(pickKey([2])).to.be.equal('0');
    expect(pickKey({ a: 1, b: 1, c: 1 })).to.be.oneOf(['a', 'b', 'c']);
  });
});
