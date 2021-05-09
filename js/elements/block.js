import {BLOCK_WIDTH,BLOCK_HEIGHT} from "./values.js"

export default class Block extends HTMLElement {

    constructor() {
        super()
        this.root = this.attachShadow({mode: "open"})
        this.position = {
            x: this.dataset.positionX | 0,
            y: this.dataset.positionY | 0
        }
        this.initialisation()
        this.root.appendChild(this.div)
    }

    initialisation() {
        // Stylisation du conteneur
        this.style.position = 'absolute'
        this.style.top = `${BLOCK_HEIGHT * this.position.y}px`
        this.style.left = `${BLOCK_WIDTH * this.position.x}px`

        this.div = document.createElement('div')
        this.style.width = BLOCK_WIDTH + 'px'
        this.style.height = BLOCK_HEIGHT + 'px'
        this.div.style.width = '100%'
        this.div.style.height = '100%'
        this.div.style.backgroundColor = '#444'
        this.style.boxSizing = 'border-box'
        
    }

}