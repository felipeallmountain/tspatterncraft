import {TweenMax} from 'gsap'

import SiegeTank from '../SiegeTank';
import ITankState from './ITankState';

export default class TankState implements ITankState {
  private siegeTank: SiegeTank

  public get damage(): number {
    return 10
  }

  public get mode(): string {
    return 'Tank'
  }

  public get color(): string {
    return '#00F'
  }

  public get radius(): [string, string] {
    return ['0%', '0%']
  }

  constructor(siegeTank: SiegeTank) {
    this.siegeTank = siegeTank
  }

  public move(x: number, y: number): void {
    TweenMax.to(this.siegeTank, 1, {x, y})
  }

  public attack(): void {
    const attackObj = {
      value: 0
    }
    TweenMax.to(attackObj, 1, {
      value: this.damage,
      onUpdate: () => {
        this.siegeTank.attackText.innerHTML = `Attacking for ${Math.round(attackObj.value)}`
      }
    })
  }

  public toTankMode(): void {
    this.siegeTank.attackText.innerHTML = `Already in Tank`
  }

  public toSiegeMode(): void {
    this.siegeTank.state = this.siegeTank.siegeState    
  }

  public toFlyMode(): void {
    this.siegeTank.state = this.siegeTank.flyState    
  }
}
