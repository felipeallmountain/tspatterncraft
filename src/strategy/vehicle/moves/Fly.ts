import {TweenMax} from 'gsap'
import IMoveVehicleBehavior from './IMoveVehicleBehavior';

export default class Fly implements IMoveVehicleBehavior {
  move(element, tweenVars) {
    TweenMax.killAll()
    TweenMax.to(element, 1, tweenVars)
  }
}