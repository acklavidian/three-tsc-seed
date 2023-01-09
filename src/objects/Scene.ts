import { Group } from 'three';
import Land from './Land/Land';
import Flower from './Flower/Flower';
import BasicLights from './Lights';

export default class SeedScene extends Group {
  constructor() {
    super();

    const land = new Land();
    const flower = new Flower();
    const lights = new BasicLights();

    this.add(land, flower, lights);
  }

  update(timeStamp: number) {
    this.rotation.y = timeStamp / 10000;
  }
}