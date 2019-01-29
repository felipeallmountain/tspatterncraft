import anime from 'animejs'

import ITankState from './states/ITankState';
import TankState from './states/TankState';
import SiegeState from './states/SiegeState';
import FlyState from './states/FlyState';

export default class SiegeTank {

  private _tankElement
  public get tankElement() {
    return this._tankElement
  }
  public set tankElement(value) {
    this._tankElement = value
  }

  private _state: ITankState
  public get state(): ITankState {
    return this._state
  }
  public set state(value: ITankState) {
    this._state = value
    this.applyState()
  }

  public tankModeText
  public attackText

  public tankState: TankState
  public siegeState: SiegeState
  public flyState: FlyState

  constructor() {
    this.tankElement = document.createElement('div')

    this.tankModeText = document.createElement('p')
    this.tankElement.append(this.tankModeText)
    
    this.attackText = document.createElement('p')
    this.tankElement.append(this.attackText)
    
    this.setTankStyles()

    this.tankState = new TankState(this)
    this.siegeState = new SiegeState(this)
    this.flyState = new FlyState(this)

    this.state = this.tankState
  }

  private setTankStyles(): void {
    this.tankElement.style.width = '100px'
    this.tankElement.style.height = '100px'
    this.tankElement.style.color = 'white'
    this.tankElement.style.fontFamily = 'sans-serif'
    this.tankElement.style.fontSize = '10px'

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
      targets: this.tankElement,
      borderRadius: this.state.radius,
      backgroundColor: this.state.color,
      duration: 2000
    })
  }
}
