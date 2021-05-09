import Game from "./game.js";

let game = new Game()

document.addEventListener('completed', () => {
    setTimeout(() => {
        if (game.increment()) {
            game.init()
        } else {
            alert("Bravo vous avez terminé !!")
        }
    }, 1000)
})