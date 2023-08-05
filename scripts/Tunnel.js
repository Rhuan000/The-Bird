export class Tunnel{
    constructor(element, elementPair){
        //This way the tunnel of bottom and top are always connected. And was easier to interact with them
        this.element = element
        this.topPosition = () => {return this.element.offsetTop - (this.pair.style.height ? this.element.style.height.replace('px', '') : 215)} 
        this.leftPosition = () => {return  this.element.offsetLeft}
        this.styleHeight = () => {return this.element.style.height}
        this.setStyleHeight = (value) => {this.element.style.height = value}
        this.setPositionLeft = (value) => {this.element.style.left = value} 
        
        this.pair = elementPair
        this.pair.topPosition = () => {return this.pair.offsetTop + (this.pair.style.height ? this.pair.style.height.replace('px', ''): 196)}
        this.pair.leftPosition = () => {return this.pair.offsetLeft}
        this.pair.styleHeight = () => {return this.pair.style.height}
        this.pair.setStyleHeight = (value) => {this.pair.style.height = value}
        this.pair.setPositionLeft = (value) => {this.pair.style.left = value} 
    }
}

const tunnel = new Tunnel(document.querySelector('.tunnel'), document.querySelector('.tunnel-inverted'))
const tunnel2 = new Tunnel(document.querySelector('.tunnel2'), document.querySelector('.tunnel-inverted2'))
const tunnel3 = new Tunnel(document.querySelector('.tunnel3'), document.querySelector('.tunnel-inverted3'))

export const tunnels = [tunnel, tunnel2, tunnel3]
