export default class Bullet {
  public bulletElement

  constructor() {
    this.bulletElement = document.createElement('div')
    const { innerWidth, innerHeight } = window
    
    this.bulletElement.style.transform =
      `translate(${innerWidth / 2}px, ${innerHeight / 2}px)`
    this.setBulletStyles()
  }

  protected setBulletStyles(): void {
    this.bulletElement.style.position = 'absolute'
    this.bulletElement.style.width = '10px'
    this.bulletElement.style.height = '10px'
    this.bulletElement.style.borderRadius = '5px'
  }
}
