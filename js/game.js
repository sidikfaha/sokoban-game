import LevelFactory from "./level_factory.js";
import Actor from "./elements/actor.js"
import Wall from "./elements/wall.js"
import Box from "./elements/box.js"
import Content from "./elements/content.js"

customElements.define('actor-element', Actor)
customElements.define('wall-element', Wall)
customElements.define('box-element', Box)
customElements.define('content-element', Content)

export default class Game {
    constructor() {
        this.level = 1
        this.init()
    }

    init() {
        this.drawBoard(LevelFactory[this.level - 1].board)
    
    }

    drawBoard(levelPath = [""]) {
        const gBoard = document.querySelector("#app")
        gBoard.innerHTML = ""
        levelPath.forEach((line, i) => {
            line.split("").forEach((e, j) => {
                let el
                switch (e) {
                    case "#":
                        el = `<wall-element id="e${j}_${i}" data-position-x="${j}" data-position-y="${i}"></wall-element>`
                        break
                    case "*":
                        el = `<actor-element data-position-x="${j}" data-position-y="${i}"></actor-element>`
                        break
                    case "b":
                        el = `<box-element id="e${j}_${i}" data-position-x="${j}" data-position-y="${i}"></box-element>`
                        break
                    case "c":
                        el = `<content-element id="c${j}_${i}" data-position-x="${j}" data-position-y="${i}" data-resolved="0"></content-element>`
                        break
                    case "0":
                        el = null
                        break
                }
                gBoard.innerHTML += el ? el : ''
            })
        });
    }

    increment() {
        this.level++
        return this.level <= LevelFactory.length
    }
}