import IMoveVehicleBehavior from './IMoveVehicleBehavior';
import { TweenMax, TimelineMax } from 'gsap';

export default class Teleport implements IMoveVehicleBehavior {
  move(element, tweenVars) {
    TweenMax.killAll()
    const tl = new TimelineMax()
    tl
      .to(element, 0.2, {autoAlpha: 0})
      .set(element, tweenVars)
      .to(element, 0.2, {autoAlpha: 1})
  }
}