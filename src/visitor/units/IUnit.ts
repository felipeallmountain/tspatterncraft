import IBullet from '../bullets/IBullet';

export default interface IUnit {
  unitElement: any
  accept(bullet: IBullet): void
}
