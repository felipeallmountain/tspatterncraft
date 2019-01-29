import IUnit from './IUnit';
import Unit from './Unit';
import IBullet from '../bullets/IBullet';

export default class LightUnit extends Unit implements IUnit {
  public maxHitPoints = 125
  public hitPoints = 125
  
  constructor(x: number, y: number) {
    super(x, y)
    this.setHitpointsLabel()
  }

  protected setUnitStyles() {
    super.setUnitStyles()
    this.unitElement.style.background = '#00ff00'
    this.unitElement.style.borderRadius = '15px'
  }

  public accept(bullet: IBullet) {
    bullet.visitLight(this)
  }
}
