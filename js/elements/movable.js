import Block from "./block.js"
import {BLOCK_WIDTH,BLOCK_HEIGHT} from "./values.js"

export default class Movable extends Block {

    constructor() {
        super()
    }

    moveTo(x,y) {
        this.style.top = `${BLOCK_HEIGHT * y}px`
        this.style.left = `${BLOCK_WIDTH * x}px`
        this.position = {x,y}
        this.id = `e${x}_${y}`
        this.dataset.positionX = x
        this.dataset.positionY = y
    }

    get elementUp() {
        return document.querySelector(`#e${this.position.x}_${this.position.y - 1}`)
    }

    get elementDown() {
        return document.querySelector(`#e${this.position.x}_${this.position.y + 1}`)
    }

    get elementLeft() {
        return document.querySelector(`#e${this.position.x - 1}_${this.position.y}`)
    }
    
    get elementRight() {
        return document.querySelector(`#e${this.position.x + 1}_${this.position.y}`)
    }
   
}