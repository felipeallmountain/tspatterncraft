import anime from 'animejs'

export default class SiegeTank extends HTMLDivElement {

  public tankModeText: HTMLParagraphElement
  public attackText: HTMLParagraphElement

  private damage: number
  private mode: string
  private color: string
  private radius: [string, string]
  private canMove: boolean


  constructor() {
    super()

    this.tankModeText = document.createElement('p')
    this.append(this.tankModeText)
    
    this.attackText = document.createElement('p')
    this.append(this.attackText)
    
    this.setTankStyles()
  }

  private setTankStyles(): void {
    this.style.display = 'block'
    this.style.width = '100px'
    this.style.height = '100px'
    this.style.color = 'white'
    this.style.fontFamily = 'sans-serif'
    this.style.fontSize = '13px'
    this.style.position = 'absolute'

    this.tankModeText.style.position = 'absolute'
    this.tankModeText.style.textAlign = 'center'
    this.tankModeText.style.width = '100px'
    
    this.attackText.style.position = 'absolute'
    this.attackText.style.width = '100px'
    this.attackText.style.paddingTop = '15px'
    this.attackText.style.textAlign = 'center'
  }

  public move(x: number, y: number): void {
    this.attackText.innerHTML = ``
    if (this.canMove) {
      anime({
        targets: this,
        translateX: x,
        translateY: y,
        duration: 1000,
        easing: 'easeInOutExpo'
      })
    } else {
      this.attackText.innerHTML = `Cannot Move`
    }

  }

  public attack(): void {
    this.attackText.innerHTML = `Attacking for ${this.damage}`
    anime({
      targets: this.attackText,
      duration: 500,
      easing: 'linear',
      scale: [1, 2, 1] 
    })
  }

  public toTankMode(): void {
    this.damage = 10
    this.mode = 'Tank'
    this.color = '#00F'
    this.canMove = true
    this.radius = ['0%', '0%']
    this.applyState()
  }

  public toSiegeMode(): void {
    this.damage = 20
    this.mode = 'Siege'
    this.color = '#ff0000'
    this.canMove = false
    this.radius = ['0%', '50%']
    this.applyState()
  }

  public applyState(): void {
    this.tankModeText.innerHTML = this.mode
    this.attackText.innerHTML = ``
    anime({
      targets: this,
      borderRadius: this.radius,
      backgroundColor: this.color,
      duration: 2000
    })
  }
}

customElements.define('siege-tank', SiegeTank, {extends: 'div'})
