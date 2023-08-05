export class Bird{
    constructor(element){
        this.element = element
        this.topPosition = () => {return this.element.offsetTop}
        this.leftPosition = () => {return this.element.offsetLeft}
        this.setPositionTop = (newValue) => {this.element.style.top = newValue}
        this.setPositionLeft = (newValue) => {this.element.style.left = newValue}
    }
    
}

export const bird = new Bird(document.querySelector('.bird'))
