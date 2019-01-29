import IMoveVehicleBehavior from './IMoveVehicleBehavior';
import {TweenMax, TimelineMax} from 'gsap'

export default class Walk implements IMoveVehicleBehavior {
  move(element, tweenVars) {
    TweenMax.killAll()
    TweenMax.to(element, 3, tweenVars)

    const tl = new TimelineMax()

    tl
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 20})
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 20})
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 0})

  }
}