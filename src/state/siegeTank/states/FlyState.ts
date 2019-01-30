import anime from 'animejs'

import SiegeTank from '../SiegeTank';
import ITankState from './ITankState';

export default class FlyState implements ITankState {
  private siegeTank: SiegeTank

  public get damage(): number {
    return 0
  }

  public get mode(): string {
    return 'Fly'
  }

  public get color(): string {
    return '#0F0'
  }

  public get radius(): [string, string] {
    return ['15%', '15%']
  }

  constructor(siegeTank: SiegeTank) {
    this.siegeTank = siegeTank
  }

  public move(x: number, y: number): void {
    anime({
      targets: this.siegeTank,
      translateX: x,
      translateY: y,
      duration: 250,
      easing: 'linear',
      rotate: '1turn',
      complete: () => {
        anime.set(
          this.siegeTank,
          {
            rotate: 0
          }
        )
      }
    })
  }

  public attack(): void {
    this.siegeTank.attackText.innerHTML = `Cannot attack`
  }

  public toTankMode(): void {
    this.siegeTank.state = this.siegeTank.tankState
  }

  public toSiegeMode(): void {
    this.siegeTank.attackText.innerHTML = `Cannot switch to siege`    
  }

  public toFlyMode(): void {
    this.siegeTank.attackText.innerHTML = `Already in Fly`
  }
}
