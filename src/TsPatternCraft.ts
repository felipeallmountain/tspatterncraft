import IPattern from './IPattern';
import StrategyPatternDemo from './strategy/StrategyPatternDemo';
import StatePatternDemo from './state/StatePatternDemo';
import VisitorPatternDemo from './visitor/VisitorPatternDemo';

export default class TsPatternCraft {
  private appContainer: HTMLElement
  private currentPattern: IPattern;

  private buttonClasses = ['Strategy', 'State', 'Visitor']

  constructor() {
    this.appContainer = document.querySelector('#App')    
    this.currentPattern = new StrategyPatternDemo(this.appContainer)
    this.createButtons()
  }

  private createButtons(): void {
    let i: number
    const limit = this.buttonClasses.length
    const listHolder = document.getElementsByClassName('button-list')[0]
    
    for (i = 0; i < limit; i++) {
      const buttonName = this.buttonClasses[i]
      const li = document.createElement('li')
      const button = document.createElement('button')
      button.innerHTML = buttonName
      button.setAttribute('id', buttonName)
      
      li.appendChild(button)
      listHolder.appendChild(li)
      button.addEventListener('click', this.onButtonClick.bind(this))
    }
  }

  private onButtonClick(evt: MouseEvent): void {
    const { srcElement } = evt

    this.clearCanvas()

    const clickedButton = srcElement.getAttribute('id')
    switch(clickedButton) {
      case 'Strategy':
        this.currentPattern = new StrategyPatternDemo(this.appContainer)
      break
      case 'State':
        this.currentPattern = new StatePatternDemo(this.appContainer)
      break
      case 'Visitor':
        this.currentPattern = new VisitorPatternDemo(this.appContainer)
      break
    }
  }

  private clearCanvas(): void {
    this.currentPattern.removeEventListeners()
    this.appContainer.innerHTML = ''
  }
}
