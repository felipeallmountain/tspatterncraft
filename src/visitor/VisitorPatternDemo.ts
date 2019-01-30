import IPattern from '../IPattern';
import IUnit from './units/IUnit';
import ArmoredUnit from './units/ArmoredUnit';
import LightUnit from './units/LightUnit';
import IBullet from './bullets/IBullet';
import TankBullet from './bullets/TankBullet';
import HealerBullet from './bullets/HealerBullet';
import { TweenLite } from 'gsap';
import Unit from './units/Unit';
export default class VisitorPatternDemo implements IPattern {
  private appContainer: HTMLElement

  private isTankBullet = true
  private fieldUnits: Unit[] = []
  private readonly pairs = 7

  private onKeyUpHandler
  private onUnitClickHandler
  

  constructor(appContainer: HTMLElement) {
    this.appContainer = appContainer
    
    this.onKeyUpHandler = this.onKeyUp.bind(this)
    this.onUnitClickHandler = this.onUnitClick.bind(this)

    this.createUnits()
    document.addEventListener('keyup', this.onKeyUpHandler)
  }

  private createUnits() {
    const offset = 80
    let i: number
    for (i = 0; i < this.pairs; i++) {
      // create light armor units
      const xRandomArmored = Math.random() * (window.innerWidth - offset)
      const yRandomArmored = Math.random() * (window.innerHeight - offset)
      const armored: ArmoredUnit = new ArmoredUnit(xRandomArmored, yRandomArmored)
      this.appContainer.append(armored)
      armored.addEventListener('click', this.onUnitClickHandler)

      // create armored units
      const xRandomLight = Math.random() * (window.innerWidth - offset)
      const yRandomLight = Math.random() * (window.innerHeight - offset)
      const light: LightUnit = new LightUnit(xRandomLight, yRandomLight)
      this.appContainer.append(light)
      light.addEventListener('click', this.onUnitClickHandler)

      this.fieldUnits = [...this.fieldUnits, armored, light]
    }    
  }

  private onKeyUp(event: KeyboardEvent): void {
    // TO-DO: REMEMBER STATE PATTERN!!
    const { keyCode } = event
    
    switch(keyCode) {
      case 49: // 1
        this.isTankBullet = true
      break
      case 50: // 2
        this.isTankBullet = false
      break
    }
  }

  private onUnitClick(event: MouseEvent): void {    
    const { pageX, pageY, target } = event

    // TO-DO: REMEMBER STATE PATTERN!!
    const bullet = this.isTankBullet
      ? new TankBullet()
      : new HealerBullet()

    const speed = this.isTankBullet ? 0.2 : 1

    this.appContainer.append(bullet)
    TweenLite.to(bullet, speed, {
      x: pageX,
      y: pageY,
      onComplete: this.onInfantryHit,
      onCompleteParams: [target, bullet]
    })
  }

  private onInfantryHit(infantryUnit: any, bullet: IBullet): void {
    infantryUnit.accept(bullet)
    TweenLite.to(bullet, 0.3, {autoAlpha: 0, scale: 2})
  }

  public removeEventListeners(): void {
    document.removeEventListener('keyup', this.onKeyUpHandler)
    let i: number
    const limit = this.fieldUnits.length
    for (i = 0; i < limit; i++) {
      const unit = this.fieldUnits[i]
      unit.removeEventListener('click', this.onUnitClickHandler)
    }
  }
}