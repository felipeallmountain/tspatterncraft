import IPattern from '../IPattern';
import ArmoredUnit from './units/ArmoredUnit';
import LightUnit from './units/LightUnit';
import TankBullet from './bullets/TankBullet';
import { TweenLite } from 'gsap';
import Unit from './units/Unit';

export default class VisitorPatternDemo implements IPattern {
  private appContainer: HTMLElement

  private fieldUnits: Unit[] = []
  private readonly pairs = 7

  private onKeyUpHandler
  private onUnitClickHandler
  
  // constructor
  constructor(appContainer: HTMLElement) {
    this.appContainer = appContainer
    
    this.onKeyUpHandler = this.onKeyUp.bind(this)
    this.onUnitClickHandler = this.onUnitClick.bind(this)

    this.createUnits()
    document.addEventListener('keyup', this.onKeyUpHandler)
  }

  // create unit population
  private createUnits() {
    let i: number
    for (i = 0; i < this.pairs; i++) {
      // create armored units
      this.createSingleUnit()

      // create light units
      this.createSingleUnit(false)

    }    
  }

  // create light or armored unit
  private createSingleUnit(armored = true): void {
    const offset = 80
    const xRandomLocation = Math.random() * (window.innerWidth - offset)
    const yRandomLocation = Math.random() * (window.innerHeight - offset)
    const unit = armored
      ? new ArmoredUnit(xRandomLocation, yRandomLocation)
      : new LightUnit(xRandomLocation, yRandomLocation)

    unit.addEventListener('click', this.onUnitClickHandler)
    this.fieldUnits = [...this.fieldUnits, unit]
    this.appContainer.append(unit)
  }

  // on key up events
  private onKeyUp(event: KeyboardEvent): void {
  }

  // on unit click 
  private onUnitClick(event: MouseEvent): void {    
    const { pageX, pageY } = event
    const bullet = new TankBullet()
    const speed = 0.2

    this.appContainer.append(bullet)
    TweenLite.to(bullet, speed, {
      x: pageX,
      y: pageY
    })
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