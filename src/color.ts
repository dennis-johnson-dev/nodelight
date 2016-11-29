import * as fs from 'fs';

class Color {
  color: string;
  statusFile: string;
  constructor(initialColor: string, colorFile: string) {
    this.color = initialColor;
    this.statusFile = colorFile;
  }

  getColor() {
    return this.color;
  }

  setColor(newColor: string) {
    this.color = newColor;
    this.writeColor();
  }

  writeColor() {
    fs.writeFile(this.statusFile, this.color, function(error) {
      if (error) {
        return console.log(error);
      }
    });
  }
}

export default Color;
