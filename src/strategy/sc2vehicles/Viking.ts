import Vehicle from '../vehicle/Vehicle';

export default class Viking extends Vehicle {
  constructor() {
    super()
    this.vehicleElement.style.background = 'orange'
    this.vehicleElement.style.width = '50px'
    this.vehicleElement.style.height = '50px'
  }
}