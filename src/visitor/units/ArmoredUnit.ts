import Unit from './Unit';

export default class ArmoredUnit extends Unit {
  public maxHitPoints = 455
  public hitPoints = 455
  
  constructor(x: number, y: number) {
    super(x, y)
  }

  protected setUnitStyles() {
    super.setUnitStyles()
    this.style.background = '#ff0000'
  }
}
customElements.define('armored-unit', ArmoredUnit)
