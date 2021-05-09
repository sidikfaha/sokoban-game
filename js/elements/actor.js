import Movable from "./movable.js"
import {targets, BLOCK_MAX} from "./values.js"

export default class Actor extends Movable {

    constructor() {
        super()
    }

    initialisation() {
        super.initialisation()
        this.div.style.backgroundColor = "green"
        this.div.style.borderRadius = '50%'
    }

    connectedCallback() {
        document.body.addEventListener('keydown', e => {
            switch (e.key) {
                case "ArrowUp":
                    this.goUp()
                    break
                case "ArrowDown":
                    this.goDown()
                    break
                case "ArrowLeft":
                    this.goLeft()
                    break
                case "ArrowRight":
                    this.goRight()
                    break
            }
        })
    }

    goUp() {
        if (this.isFree(this, targets.UP)) {
            this.moveTo(this.position.x, this.position.y - 1)
        } else {
            if (this.elementUp && this.elementUp.tagName === 'BOX-ELEMENT') {
                this.pushUp()
            }
        }
    }

    goDown() {
        if (this.isFree(this, targets.DOWN)) {
            this.moveTo(this.position.x, this.position.y + 1)
        } else {
            if (this.elementDown && this.elementDown.tagName === 'BOX-ELEMENT') {
                this.pushDown()
            }
        }
    }

    goLeft() {
        if (this.isFree(this, targets.LEFT)) {
            this.moveTo(this.position.x - 1, this.position.y)
        } else {
            if (this.elementLeft && this.elementLeft.tagName === 'BOX-ELEMENT') {
                this.pushLeft()
            }
        }
    }

    goRight() {
        if (this.isFree(this,targets.RIGHT)) {
            this.moveTo(this.position.x + 1, this.position.y)
        } else {
            if (this.elementRight && this.elementRight.tagName === 'BOX-ELEMENT') {
                this.pushRight()
            }
        }
    }

    isFree(element, target) {
        let _element = null
        let outOfBounds = false
        switch (target) {
            case targets.UP:
                _element = element.elementUp
                outOfBounds = element.position.y == 0
                break
            case targets.DOWN:
                _element = element.elementDown
                outOfBounds = element.position.y == BLOCK_MAX - 1
                break
            case targets.LEFT:
                _element = element.elementLeft
                outOfBounds = element.position.x == 0
                break
            case targets.RIGHT:
                _element = element.elementRight
                outOfBounds = element.position.x == BLOCK_MAX - 1
                break
        }
        return !_element && !outOfBounds
    }

    pushUp(){
        let element = this.elementUp
        if (this.isFree(element, targets.UP)) {
            this.moveTo(element.position.x, element.position.y)
            element.moveTo(element.position.x, element.position.y - 1)
        } else {
            console.log("Nooo")
        }
    }

    pushDown(){
        let element = this.elementDown
        if (this.isFree(element, targets.DOWN)) {
            this.moveTo(element.position.x, element.position.y)
            element.moveTo(element.position.x, element.position.y + 1)
        } else {
            console.log("Nooo")
        }
    }

    pushLeft(){
        let element = this.elementLeft
        if (this.isFree(element, targets.LEFT)) {
            this.moveTo(element.position.x, element.position.y)
            element.moveTo(element.position.x - 1, element.position.y)
        } else {
            console.log("Nooo")
        }
    }

    pushRight(){
        let element = this.elementRight
        if (this.isFree(element, targets.RIGHT)) {
            this.moveTo(element.position.x, element.position.y)
            element.moveTo(element.position.x + 1, element.position.y)
        } else {
            console.log("Nooo")
        }
    }

}