class Color {
  color: string;
  constructor(initialColor: string) {
    this.color = initialColor;
  }

  getColor() {
    return this.color;
  }

  setColor(newColor: string) {
    this.color = newColor
  }
}

export default Color;
