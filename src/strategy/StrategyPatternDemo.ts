import IPattern from '../IPattern';
import Viking from './sc2vehicles/Viking';
import Fly from './vehicle/moves/Fly';
import Walk from './vehicle/moves/Walk';
import Swim from './vehicle/moves/Swim';
import Teleport from './vehicle/moves/Teleport';

export default class StrategyPatternDemo implements IPattern {
  private appContainer: HTMLElement

  private sc2Vehicle: Viking

  private onMouseDownHandler
  private onKeyUpHandler

  constructor(appContainer: HTMLElement) {
    this.appContainer = appContainer
    this.createVehicle()

    this.onMouseDownHandler = this.onMouseDown.bind(this)
    this.onKeyUpHandler = this.onKeyUp.bind(this)
    
    this.appContainer.addEventListener('click', this.onMouseDownHandler)
    document.addEventListener('keyup', this.onKeyUpHandler)
  }

  private createVehicle() {
    this.sc2Vehicle = new Viking()
    this.sc2Vehicle.moveBehavior = new Fly()
    this.appContainer.append(this.sc2Vehicle.vehicleElement)
  }

  private onKeyUp(evt: KeyboardEvent): void {
    const { keyCode } = evt
    switch (keyCode) {
      case 49:
        this.sc2Vehicle.moveBehavior = new Fly()
        break
      case 50:
        this.sc2Vehicle.moveBehavior = new Walk()
        break
      case 51:
        this.sc2Vehicle.moveBehavior = new Swim()
        break
      case 52:
        this.sc2Vehicle.moveBehavior = new Teleport()
        break
    }
  }

  private onMouseDown(evt: MouseEvent): void {
    const { pageX, pageY } = evt
    const tweenVars: any = {
      x: pageX, y: pageY
    }
    this.sc2Vehicle.move(tweenVars)
  }

  public removeEventListeners(): void {
    this.appContainer.removeEventListener('click', this.onMouseDownHandler)
    document.removeEventListener('keyup', this.onKeyUpHandler)
  }
}