import anime from 'animejs'

import ITankState from './states/ITankState';
import TankState from './states/TankState';
import SiegeState from './states/SiegeState';
import FlyState from './states/FlyState';

export default class SiegeTank extends HTMLDivElement {

  private _state: ITankState
  public get state(): ITankState {
    return this._state
  }
  public set state(value: ITankState) {
    this._state = value
    this.applyState()
  }

  public tankModeText: HTMLParagraphElement
  public attackText: HTMLParagraphElement

  public tankState: TankState
  public siegeState: SiegeState
  public flyState: FlyState

  constructor() {
    super()

    this.tankModeText = document.createElement('p')
    this.append(this.tankModeText)
    
    this.attackText = document.createElement('p')
    this.append(this.attackText)
    
    this.setTankStyles()

    this.tankState = new TankState(this)
    this.siegeState = new SiegeState(this)
    this.flyState = new FlyState(this)

    this.state = this.tankState
  }

  private setTankStyles(): void {
    this.style.width = '100px'
    this.style.height = '100px'
    this.style.color = 'white'
    this.style.fontFamily = 'sans-serif'
    this.style.fontSize = '10px'

    this.tankModeText.style.paddingTop = '15px'
    this.tankModeText.style.textAlign = 'center'

    this.attackText.style.textAlign = 'center'
  }

  public move(x: number, y: number): void {
    this.state.move(x, y)
  }

  public attack(): void {
    this.state.attack()
  }

  public toTankMode(): void {
    this.state.toTankMode()
  }

  public toSiegeMode(): void {
    this.state.toSiegeMode()
  }

  public toFlyMode(): void {
    this.state.toFlyMode()
  }

  public applyState(): void {
    this.tankModeText.innerHTML = this.state.mode
    this.attackText.innerHTML = ``
    anime({
      targets: this,
      borderRadius: this.state.radius,
      backgroundColor: this.state.color,
      duration: 2000
    })
  }
}

customElements.define('siege-tank', SiegeTank, {extends: 'div'})
