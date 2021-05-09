import Block from "./block.js";
import { BLOCK_HEIGHT, BLOCK_WIDTH } from "./values.js";

export default class Content extends Block {
    constructor() {
        super()
        this.style.justifyContent = 'center'
        this.style.alignItems = 'center'
        this.style.display = 'flex'
        this.div.style.width = BLOCK_WIDTH / 1.5 + "px"
        this.div.style.height = BLOCK_HEIGHT / 1.5 + "px"
        this.div.style.border = '5px orange solid'
        this.div.style.zIndex = '10'
        this.div.style.borderRadius = '50%'
        this.div.style.removeProperty('background')
    }
}