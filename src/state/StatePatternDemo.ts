import IPattern from '../IPattern';
import SiegeTank from './siegeTank/SiegeTank';

export default class StatePatternDemo implements IPattern {
  private appContainer: HTMLElement
  private siegeTank: SiegeTank

  private onKeyUpHandler
  private onMouseDownHandler

  constructor(appContainer: HTMLElement) {
    this.appContainer = appContainer
    this.createSiegeTank()

    this.onKeyUpHandler = this.onKeyUp.bind(this)
    this.onMouseDownHandler = this.onMouseDown.bind(this)

    document.addEventListener('keyup', this.onKeyUpHandler)
    this.appContainer.addEventListener('click', this.onMouseDownHandler)
  }

  private createSiegeTank() {
    this.siegeTank = new SiegeTank()
    this.appContainer.append(this.siegeTank.tankElement)
  }

  private onKeyUp(evt: KeyboardEvent): void {
    const { keyCode } = evt
    switch(keyCode) {
      case 32: // space
        this.siegeTank.attack()
        break
      case 49: // 1
        this.siegeTank.toTankMode()
        break
      case 50: // 2
        this.siegeTank.toSiegeMode()
        break
      case 51: // 3
        this.siegeTank.toFlyMode()
        break
    }

  }

  private onMouseDown(evt: MouseEvent): void {
    const { pageX, pageY } = evt
    this.siegeTank.move(pageX, pageY)
  }

  public removeEventListeners(): void {
    document.removeEventListener('keyup', this.onKeyUpHandler)
    this.appContainer.removeEventListener('click', this.onMouseDownHandler)
  }
}