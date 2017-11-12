import Ray from './Ray';
import Vector from './Vector';

export default class Camera {
  origin: Vector;
  lowerLeftCorner: Vector;
  horizontal: Vector;
  vertical: Vector;

  constructor() {
    this.lowerLeftCorner = new Vector(-2.0, -1.0, -1.0);
    this.horizontal = new Vector(4.0, 0.0, 0.0);
    this.vertical = new Vector(0.0, 2.0, 0.0);
    this.origin = new Vector(0.0, 0.0, 0.0);
  }

  getRay(u: number, v: number) : Ray {
    return new Ray(this.origin, 
      Vector.add(this.lowerLeftCorner, 
        Vector.add(Vector.multiply(u, this.horizontal), Vector.multiply(v, this.vertical))));
  }
}
