import {TweenMax} from 'gsap'

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
    TweenMax.to(this, 2, {
      borderRadius: this.state.radius,
      backgroundColor: this.state.color
    })
  }
}

customElements.define('siege-tank', SiegeTank, {extends: 'div'})
