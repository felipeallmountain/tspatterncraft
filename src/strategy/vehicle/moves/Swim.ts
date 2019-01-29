import IMoveVehicleBehavior from './IMoveVehicleBehavior';
import { TweenMax, TimelineMax } from 'gsap';

export default class Swim implements IMoveVehicleBehavior {
  move(element, tweenVars) {
    TweenMax.killAll()
    TweenMax.to(element, 4, tweenVars)

    const tl = new TimelineMax()
    tl
      .to(element, 0.5, {
        scale: 1.8
      })
      .to(element, 0.5, {
        scale: 0.5
      })
      .to(element, 0.5, {
        scale: 1.5
      })
      .to(element, 0.5, {
        scale: 0.3
      })
      .to(element, 0.5, {
        scale: 1.3
      })
      .to(element, 0.5, {
        scale: 0.2
      })
      .to(element, 0.5, {
        scale: 2
      })
      .to(element, 0.5, {
        scale: 1
      })
  }
}