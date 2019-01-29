import IPattern from '../IPattern';
import IUnit from './units/IUnit';
import ArmoredUnit from './units/ArmoredUnit';
import LightUnit from './units/LightUnit';
import IBullet from './bullets/IBullet';
import TankBullet from './bullets/TankBullet';
import HealerBullet from './bullets/HealerBullet';
import { TweenLite } from 'gsap';
export default class VisitorPatternDemo implements IPattern {
  private appContainer: HTMLElement

  private isTankBullet = true
  private fieldUnits: IUnit[] = []
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
      const armored: IUnit = new ArmoredUnit(xRandomArmored, yRandomArmored)
      this.appContainer.append(armored.unitElement)
      armored.unitElement.addEventListener('click', this.onUnitClickHandler)

      // create armored units
      const xRandomLight = Math.random() * (window.innerWidth - offset)
      const yRandomLight = Math.random() * (window.innerHeight - offset)
      const light: IUnit = new LightUnit(xRandomLight, yRandomLight)
      this.appContainer.append(light.unitElement)
      light.unitElement.addEventListener('click', this.onUnitClickHandler)

      this.fieldUnits = [...this.fieldUnits, armored, light]
    }    
  }

  private onKeyUp(event: KeyboardEvent): void {
    // TO-DO: REMEMBER STATE PATTERN!!
    const { keyCode } = event
    
    switch(keyCode) {
      case 13: // ENTER
        this.killEmAll(false)
      break;
      case 32: // SPACEBAR
        this.killEmAll()
      break
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
    const bullet: IBullet = this.isTankBullet
      ? new TankBullet()
      : new HealerBullet()

    const speed = this.isTankBullet ? 0.2 : 1

    this.appContainer.append(bullet.bulletElement)
    TweenLite.to(bullet.bulletElement, speed, {
      x: pageX,
      y: pageY,
      onComplete: this.onInfantryHit,
      onCompleteParams: [target, bullet]
    })
  }

  private onInfantryHit(infantryUnit: any, bullet: IBullet): void {
    infantryUnit.unitType.accept(bullet)
    TweenLite.to(bullet.bulletElement, 0.3, {autoAlpha: 0, scale: 2})
  }

  // KILL'EM ALL MOTHERFUCKER!!!
  private killEmAll(kill = true): void {
    let i: number
    const limit = this.fieldUnits.length
    for (i = 0; i < limit; i++) {
      const unit = this.fieldUnits[i]
      // TO-DO: REMEMBER STATE PATTERN!!
      const bullet = kill ? new TankBullet() : new HealerBullet()
      unit.accept(bullet)
    }
  }

  public removeEventListeners(): void {
    document.removeEventListener('keyup', this.onKeyUpHandler)
    let i: number
    const limit = this.fieldUnits.length
    for (i = 0; i < limit; i++) {
      const unit = this.fieldUnits[i]
      unit.unitElement.removeEventListener('click', this.onUnitClickHandler)
    }
  }
}