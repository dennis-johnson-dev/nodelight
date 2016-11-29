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
    fs.writeFileSync(this.statusFile, this.color);
  }
}

export default Color;
