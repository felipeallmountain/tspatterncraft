import Vehicle from './Vehicle';

export default class Viking extends Vehicle {
  constructor() {
    super()
    this.style.width = '0'
    this.style.height = '0'
    this.style.borderLeft = '50px solid transparent'
    this.style.borderRight = '50px solid transparent'
    this.style.borderBottom = '80px solid orange'
  }
}
customElements.define('viking-div', Viking)