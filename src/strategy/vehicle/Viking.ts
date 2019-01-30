import Vehicle from './Vehicle';

export default class Viking extends Vehicle {
  constructor() {
    super()
    this.style.background = 'orange'
    this.style.width = '50px'
    this.style.height = '50px'
  }
}
customElements.define('viking-div', Viking)