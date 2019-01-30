export default class Bullet extends HTMLElement {
  constructor() {
    super()
    const { innerWidth, innerHeight } = window
    
    this.style.transform =
      `translate(${innerWidth / 2}px, ${innerHeight / 2}px)`
    this.setBulletStyles()
  }

  protected setBulletStyles(): void {
    this.style.position = 'absolute'
    this.style.width = '10px'
    this.style.height = '10px'
    this.style.borderRadius = '5px'
  }
}
customElements.define('bullet-element', Bullet)
