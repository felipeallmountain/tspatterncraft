import IMoveVehicleBehavior from './moves/IMoveVehicleBehavior';

export default class Vehicle {
  private _vehicleElement
  public get vehicleElement() {
    return this._vehicleElement
  }
  public set vehicleElement(value) {
    this._vehicleElement = value
  }

  public moveBehavior: IMoveVehicleBehavior

  constructor() {
    this.vehicleElement = document.createElement('div')
  }

  public move(tweenVars: {x: number, y: number}): void {
    this.moveBehavior.move(this.vehicleElement, tweenVars)
  }
}