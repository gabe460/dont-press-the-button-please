controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    mySprite = sprites.create(assets.image`A static Down`, SpriteKind.Player)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . f . . . . . . . . 
        . . . . . . f 9 f . . . . . . . 
        . . . . . . f 9 f . . . . . . . 
        . . . . . f 9 9 9 f . . . . . . 
        . . . . . f 9 9 9 f . . . . . . 
        . . . . f 9 1 9 9 9 f . . . . . 
        . . . . f 9 1 9 9 9 f . . . . . 
        . . . . f 9 1 9 9 9 f . . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . f 9 9 9 9 9 9 9 f . . . . 
        . . . . f 9 9 9 9 9 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-100, 100), randint(-100, 100))
})
info.onCountdownEnd(function () {
    game.over(false, effects.slash)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`A static`)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    game.splash("please stop", "it hurts")
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`TheStage`)
game.splash("Please don't click me", "- the A button")
mySprite = sprites.create(assets.image`A static`, SpriteKind.Player)
info.startCountdown(25)
