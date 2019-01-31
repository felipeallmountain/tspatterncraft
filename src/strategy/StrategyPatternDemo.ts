import IPattern from '../IPattern';
import { TweenMax, TimelineMax } from 'gsap';

export default class StrategyPatternDemo implements IPattern {
  private appContainer: HTMLElement
  private viking: HTMLDivElement

  private onMouseDownHandler: any
  private onKeyUpHandler: any

  private isFlying = true

  constructor(appContainer: HTMLElement) {
    this.appContainer = appContainer
    this.createVehicle()

    this.onMouseDownHandler = this.onMouseDown.bind(this)
    this.onKeyUpHandler = this.onKeyUp.bind(this)
    
    this.appContainer.addEventListener('click', this.onMouseDownHandler)
    document.addEventListener('keyup', this.onKeyUpHandler)
  }

  private createVehicle() {
    this.viking = document.createElement('div')
    this.viking.style.display = 'block'
    const { innerWidth, innerHeight } = window
    this.viking.style.width = '0'
    this.viking.style.height = '0'
    this.viking.style.borderLeft = '50px solid transparent'
    this.viking.style.borderRight = '50px solid transparent'
    this.viking.style.borderBottom = '80px solid orange'
    
    this.viking.style.transform =
      `translate(${innerWidth / 2}px, ${innerHeight / 2}px)`
    this.appContainer.append(this.viking)
  }

  private onKeyUp(evt: KeyboardEvent): void {
    const { keyCode } = evt
    switch (keyCode) {
      case 49:
        this.isFlying = true
      break
      case 50:
        this.isFlying = false
      break
    }
  }

  private onMouseDown(evt: MouseEvent): void {
    const { pageX, pageY } = evt
    const tweenVars: any = {
      x: pageX, y: pageY
    }

    if (this.isFlying) {
      TweenMax.to(this.viking, 1, tweenVars)
    } else {
      TweenMax.to(this.viking, 3, tweenVars)

    const tl = new TimelineMax()
    tl
      .to(this.viking, 0.5, {rotation: -20})
      .to(this.viking, 0.5, {rotation: 20})
      .to(this.viking, 0.5, {rotation: -20})
      .to(this.viking, 0.5, {rotation: 20})
      .to(this.viking, 0.5, {rotation: -20})
      .to(this.viking, 0.5, {rotation: 0})
    }
  }

  public removeEventListeners(): void {
    this.appContainer.removeEventListener('click', this.onMouseDownHandler)
    document.removeEventListener('keyup', this.onKeyUpHandler)
  }
}