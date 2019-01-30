import IBullet from '../bullets/IBullet';

export default interface IUnit {
  accept(bullet: IBullet): void
}
