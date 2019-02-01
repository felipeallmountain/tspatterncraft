export default class Unit extends HTMLElement {
  private healthText
  private isAlive = true

  // max health
  private _maxHitPoints = 0
  public get maxHitPoints(): number {
    return this._maxHitPoints
  }
  public set maxHitPoints(value) {
    this._maxHitPoints = value
  }

  // current health
  private _hitPoints = 0
  public get hitPoints(): number {
    return this._hitPoints
  }
  public set hitPoints(value) {
    if (!this.isAlive) {
      return
    }

    this._hitPoints = value < 1 
      ? 0
      : value > this.maxHitPoints
        ? this.maxHitPoints
        : value

    this.isAlive = this._hitPoints > 0
    this.setHitpointsLabel()
  }

  constructor(x: number, y: number) {
    super()
    this.style.transform = `translate(${x}px, ${y}px)`

    this.healthText = document.createElement('p')
    this.setUnitStyles()
    this.append(this.healthText)
  }

  protected setUnitStyles(): void {
    this.style.direction = 'block'
    this.style.width = '30px'
    this.style.height = '30px'
    this.style.position = 'absolute'
    this.healthText.style.userSelect = 'none'
    this.healthText.style.pointerEvents = 'none'
    this.healthText.style.width = '70px'
    this.healthText.style.margin = '30px 0 0 0'
  }

  protected setHitpointsLabel(): void {
    this.healthText.innerHTML = !this.isAlive
      ? 'DEAD!!'
      : `${this.hitPoints} / ${this.maxHitPoints}`

    if (!this.isAlive) {
      this.healthText.style.color = 'red'
    }
  }
}

customElements.define('unit-element', Unit)