import LightUnit from '../units/LightUnit';
import ArmoredUnit from '../units/ArmoredUnit';
import IBullet from './IBullet';
import Bullet from './Bullet';

export default class TankBullet extends Bullet implements IBullet {
  private readonly lightDamage = 24
  private readonly armoredDamage = 40

  protected setBulletStyles(): void {
    super.setBulletStyles()
    this.style.background = '#000'

  }

  public visitLight(light: LightUnit): void {
    light.hitPoints -= this.lightDamage
  }

  public visitArmored(armored: ArmoredUnit): void {
    armored.hitPoints -= this.armoredDamage
  }
}
customElements.define('tank-bullet', TankBullet)