let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
game.showLongText("Bonjour visiteur dans me monde de leo quest ", DialogLayout.Bottom)
mySprite.setPosition(76, 108)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000103030303030303030902040404040404040408020404040404040404080204040404040404040802040404040404040408020404040404040404080204040404040404040805070707070707070706`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles14,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7], TileScale.Sixteen))
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
