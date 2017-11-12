import Hitable, { HitRecord } from './Hitable';
import Vector from './Vector';
import Ray from './Ray';

export default class HitableList extends Hitable {
  list: Array<Hitable>;
  listSize: number;

  constructor(l: Array<Hitable>) {
    super();

    this.list = l;
    this.listSize = l.length;
  }

  hit(ray: Ray, tMin: number, tMax: number, rec: HitRecord|null): HitRecord|null {
    const tempRec: HitRecord = {
      t: 0,
      p: new Vector(0, 0, 0),
      normal: new Vector(0, 0, 0)
    };
    
    let hitAnything: boolean = false;
    let closestSoFar: number = tMax;

    for (let i = 0; i < this.listSize; i++) {
      let thisRec = this.list[i].hit(ray, tMin, closestSoFar, tempRec);
      if (this.list[i].hit(ray, tMin, closestSoFar, tempRec)) {
        hitAnything = true;
        closestSoFar = tempRec.t;
      }
    }

    if (hitAnything) {
      return tempRec;
    } 

    return null;
  }
}
