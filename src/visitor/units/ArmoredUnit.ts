import IUnit from './IUnit';
import Unit from './Unit';
import IBullet from '../bullets/IBullet';

export default class ArmoredUnit extends Unit implements IUnit {
  public maxHitPoints = 455
  public hitPoints = 455
  
  constructor(x: number, y: number) {
    super(x, y)
    this.setHitpointsLabel()
  }

  protected setUnitStyles() {
    super.setUnitStyles()
    this.unitElement.style.background = '#ff0000'
  }

  public accept(bullet: IBullet): void {
    bullet.visitArmored(this)
  }
}
