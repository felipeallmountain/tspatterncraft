export default class Unit {
  public unitElement
  private healthText
  private isAlive = true

  private _maxHitPoints = 0
  public get maxHitPoints(): number {
    return this._maxHitPoints
  }
  public set maxHitPoints(value) {
    this._maxHitPoints = value
  }

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
    this.unitElement = document.createElement('div')
    this.unitElement.unitType = this
    this.unitElement.style.transform = `translate(${x}px, ${y}px)`

    this.healthText = document.createElement('p')
    this.setUnitStyles()
    this.unitElement.append(this.healthText)
  }

  protected setUnitStyles(): void {
    this.unitElement.style.width = '30px'
    this.unitElement.style.height = '30px'
    this.unitElement.style.position = 'absolute'
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