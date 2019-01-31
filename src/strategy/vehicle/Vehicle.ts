import IMoveVehicleBehavior from './moves/IMoveVehicleBehavior';

export default class Vehicle extends HTMLElement {
  public moveBehavior: IMoveVehicleBehavior

  constructor() {
    super()
    this.style.display = 'block'
    const { innerWidth, innerHeight } = window
    
    this.style.transform =
      `translate(${innerWidth / 2}px, ${innerHeight / 2}px)`
  }

  public move(tweenVars: {x: number, y: number}): void {
    this.moveBehavior.move(this, tweenVars)
  }
}
customElements.define('vehicle-element', Vehicle)