var app = new PIXI.Application();
document.body.appendChild(app.view);

window.onload = () => {
    updateCanvas()
}

window.onresize = () => {
    updateCanvas()
}

function updateCanvas() {

    var w = window.innerWidth
    var h = window.innerHeight
    
    app.view.style.width = w + 'px'
    app.view.style.height = h + 'px'

    app.renderer.resize(w, h)
}

var bunny;

PIXI.loader.add('bunny', 'img/bunny.png').load(() => {

    bunny = new PIXI.Sprite(PIXI.loader.resources.bunny.texture)
    bunny.x = app.renderer.width * 0.5
    bunny.y = app.renderer.height * 0.5

    app.stage.addChild(bunny)
})

app.ticker.add(() => {

    if (bunny)
        bunny.rotation += 0.1
})
