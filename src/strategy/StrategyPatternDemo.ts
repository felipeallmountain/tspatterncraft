import IPattern from '../IPattern';
import Viking from './vehicle/Viking';
import Fly from './vehicle/moves/Fly';
import Walk from './vehicle/moves/Walk';
import Swim from './vehicle/moves/Swim';
import Teleport from './vehicle/moves/Teleport';

export default class StrategyPatternDemo implements IPattern {
  private appContainer: HTMLElement
  private viking: Viking

  private onMouseDownHandler: any
  private onKeyUpHandler: any

  constructor(appContainer: HTMLElement) {
    this.appContainer = appContainer
    this.createVehicle()

    this.onMouseDownHandler = this.onMouseDown.bind(this)
    this.onKeyUpHandler = this.onKeyUp.bind(this)
    
    this.appContainer.addEventListener('click', this.onMouseDownHandler)
    document.addEventListener('keyup', this.onKeyUpHandler)
  }

  private createVehicle() {
    this.viking = new Viking()
    this.viking.moveBehavior = new Fly()
    this.appContainer.append(this.viking)
  }

  private onKeyUp(evt: KeyboardEvent): void {
    const { keyCode } = evt
    switch (keyCode) {
      case 49:
        this.viking.moveBehavior = new Fly()
        break
      case 50:
        this.viking.moveBehavior = new Walk()
        break
      case 51:
        this.viking.moveBehavior = new Swim()
        break
      case 52:
        this.viking.moveBehavior = new Teleport()
        break
    }
  }

  private onMouseDown(evt: MouseEvent): void {
    const { pageX, pageY } = evt
    const tweenVars: any = {
      x: pageX, y: pageY
    }
    this.viking.move(tweenVars)
  }

  public removeEventListeners(): void {
    this.appContainer.removeEventListener('click', this.onMouseDownHandler)
    document.removeEventListener('keyup', this.onKeyUpHandler)
  }
}