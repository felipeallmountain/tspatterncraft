import IMoveVehicleBehavior from './moves/IMoveVehicleBehavior';

export default class Vehicle extends HTMLElement {
  public moveBehavior: IMoveVehicleBehavior

  constructor() {
    super()
    this.style.display = 'block'
  }

  public move(tweenVars: {x: number, y: number}): void {
    this.moveBehavior.move(this, tweenVars)
  }
}
customElements.define('vehicle-element', Vehicle)