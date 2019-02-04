import Unit from './Unit';

export default class LightUnit extends Unit {
  public maxHitPoints = 125
  public hitPoints = 125
  
  constructor(x: number, y: number) {
    super(x, y)
  }

  protected setUnitStyles() {
    super.setUnitStyles()
    this.style.background = '#00ff00'
    this.style.borderRadius = '15px'
  }
}
customElements.define('light-unit', LightUnit)
