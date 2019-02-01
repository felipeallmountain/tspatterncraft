import Bullet from './Bullet';

export default class TankBullet extends Bullet {
  protected setBulletStyles(): void {
    super.setBulletStyles()
    this.style.background = '#000'
  }
}
customElements.define('tank-bullet', TankBullet)