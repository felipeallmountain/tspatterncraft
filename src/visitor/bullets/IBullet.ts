import LightUnit from '../units/LightUnit';
import ArmoredUnit from '../units/ArmoredUnit';

export default interface IBullet {
  visitLight(light: LightUnit): void
  visitArmored(armored: ArmoredUnit): void
}
