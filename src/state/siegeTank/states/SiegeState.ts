import {TweenMax} from 'gsap'

import SiegeTank from '../SiegeTank';
import ITankState from './ITankState';

export default class SiegeState implements ITankState {
  private siegeTank: SiegeTank

  public get damage(): number {
    return 20
  }

  public get mode(): string {
    return 'Siege'
  }

  public get color(): string {
    return '#ff0000'
  }

  public get radius(): [string, string] {
    return ['0%', '50%']
  }

  constructor(siegeTank: SiegeTank) {
    this.siegeTank = siegeTank
  }

  public move(x: number, y: number): void {
    this.siegeTank.attackText.innerHTML = `Cannot Move`
  }

  public attack(): void {
    this.siegeTank.attackText.innerHTML = `Attacking for ${this.damage}`
    TweenMax.fromTo(this.siegeTank.attackText, 0.5, 
      {
        scale: 1
      },
      {
        scale: 2,
        yoyo: true,
        repeat: 1
      }
    )
  }

  public toTankMode(): void {
    this.siegeTank.state = this.siegeTank.tankState
  }

  public toSiegeMode(): void {
    this.siegeTank.attackText.innerHTML = `Already in siege`
  }

  public toFlyMode(): void {
    this.siegeTank.attackText.innerHTML = `Cannot switch to Fly`
  }
}