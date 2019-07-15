class Player {
  constructor(ctx, width, height, map) {

    this._ctx = ctx
    this._gameWidth = width
    this._gameHeight = height
    this._map = map

    this._image = new Image()
    this._image.src = "images/holder_sprite_2.png"

    this._width = 32
    this._height = 32

    this._posX0 = 0
    this._posY0 = this._gameHeight - this._height

    this._image.xFrames = 3
    this._image.yFrames = 4
    this._image.xFramesIndex = 0
    this._image.yFramesIndex = 0
    
  }

draw() {
  console.log(this._image.width)
  console.log( Math.floor(this._image.xFrames))
  console.log(this._image.xFramesIndex)

  console.log(this._image.height)
  console.log(Math.floor(this._image.yFrames))
  console.log(this._image.yFramesIndex)

  console.log(this._posX0)
  console.log(this._posY0)
  console.log(this._width)
  console.log(this._height)

  this._ctx.drawImage(this._image, 
    this._image.xFramesIndex * Math.floor(this._image.width/this._image.xFrames), // punto en x donde empezar a recortar
     this._image.yFramesIndex * Math.floor(this._image.height/this._image.yFrames), // punto en y donde empezar a recortar
     Math.floor(this._image.width/this._image.xFrames), // punto en x donde terminar de recortar
     Math.floor(this._image.height/this._image.yFrames), // punto en y donde terminar de recortar
     this._posX0,
     this._posY0,
     this._width,
     this._height
     )
}

}