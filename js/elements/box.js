import Movable from "./movable.js";

export default class Box extends Movable {
    constructor() {
        super()
        this.div.style.background = '#66f'
    }

    moveTo(x, y) {
        super.moveTo(x, y)
        let content = document.querySelector(`#c${this.position.x}_${this.position.y}`)
        if (content) {
            this.div.style.background = "#0c6"
            content.setAttribute('data-resolved', "1")
            
            console.log(this.isCompleted())
            if (this.isCompleted()) {
                document.dispatchEvent(new Event('completed'))
            }
            
        } else {
            this.div.style.background = '#66f'
        }
    }

    isCompleted() {
        let res = true
        const others = document.querySelectorAll('content-element')
        others.forEach(e => {
            const resolved = e.getAttribute("data-resolved")
            console.log(resolved)
            if (resolved == 0) {
                res = false
            }
        })
        return res
    }
}