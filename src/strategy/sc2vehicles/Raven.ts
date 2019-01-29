import Vehicle from '../vehicle/Vehicle';

export default class Raven extends Vehicle {
  constructor() {
    super()
    this.vehicleElement.style.background = 'red'
    this.vehicleElement.style.width = '40px'
    this.vehicleElement.style.height = '20px'
  }
}