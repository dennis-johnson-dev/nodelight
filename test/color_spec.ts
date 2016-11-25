import { expect } from 'chai';
import Color from '../src/color';

describe('Test Color Class', function() {
  var defaultColor = new Color('#FF0000');

  it('get default color of red', function () {
    expect(defaultColor.getColor()).to.be.equal('#FF0000');
  });

  it('set color to blue', function () {
    defaultColor.setColor('#0000FF');
    expect(defaultColor.getColor()).to.be.equal('#0000FF');
  });
});
