import { expect } from 'chai';
import Color from '../src/color';
import * as fs from 'fs';

describe('Test Color Class', function() {
  var statusFile = '/tmp/colorTest';
  var defaultColor = new Color('#FF0000', statusFile);

  after(function() {
    fs.unlinkSync(statusFile);
  });

  it('get default color of red', function () {
    expect(defaultColor.getColor()).to.be.equal('#FF0000');
  });

  it('set color to blue', function () {
    defaultColor.setColor('#0000FF');
    expect(defaultColor.getColor()).to.be.equal('#0000FF');
  });
});

describe('Writes color to file', function() {
  it('default color is written to file', function() {
    var green = '#00FF00'
    var statusFile = '/tmp/colorTest';
    var fileColor = new Color(green, statusFile);
    fileColor.setColor(green);

    console.log('Start test:', green);
    var data = fs.readFile(statusFile, 'utf8', (error, data) => {
      if (error) throw error;
      console.log('File Data:', data);
      expect(data).to.be.equal('#00FF11');
    });
  });

  it('when the color changes, the file represents our new status');

});
