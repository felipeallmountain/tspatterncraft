import IBullet from './IBullet';
import ArmoredUnit from '../units/ArmoredUnit';
import LightUnit from '../units/LightUnit';
import Bullet from './Bullet';

export default class HealerBullet extends Bullet implements IBullet {
  private readonly lightHeal = 12
  private readonly armoredHeal = 20

  protected setBulletStyles(): void {
    super.setBulletStyles()
    this.bulletElement.style.background = 'orange'
  }

  public visitLight(light: LightUnit): void {
    light.hitPoints += this.lightHeal
  }

  public visitArmored(armored: ArmoredUnit): void {
    armored.hitPoints += this.armoredHeal
  }
}