import LightUnit from '../units/LightUnit';
import ArmoredUnit from '../units/ArmoredUnit';

export default interface IBullet {
  bulletElement: any
  visitLight(light: LightUnit): void
  visitArmored(armored: ArmoredUnit): void
}
