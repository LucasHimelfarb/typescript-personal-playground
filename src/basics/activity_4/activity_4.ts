
"use strict"

interface Figure {
  base: number;
  height: number;
}

class GeometricFigure {
  public base: number;
  public height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height
  }
}

const GeometricFigure_1: Figure = new GeometricFigure(20, 20);