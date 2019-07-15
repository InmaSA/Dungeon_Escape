class Player {
  constructor(ctx, width, height, map, keys) {

    this._ctx = ctx
    this._gameWidth = width
    this._gameHeight = height
    this._map = map
    this._keys = keys

    this._image = new Image()
    this._image.src = "images/holder_sprite_2.png"

    this._width = 32
    this._height = 32

    this._currentX= 1 // se corresponden con map[this._currentY][this._currentX]
    this._currentY= 18
    this._currentPosition = this._map[this._currentY][this._currentX]
  
    this._posX0 = this._currentX*(this._gameWidth/32)
    this._posY0 = this._currentY*(this._gameHeight/20)

    this._posX = this._posX0
    this._posY = this._posY0

    this._image.xFrames = 3
    this._image.yFrames = 4
    this._image.xFramesIndex = 0
    this._image.yFramesIndex = 0
    
    this.setListeners()
  }

  draw() {
    this._ctx.drawImage(this._image, 
      this._image.xFramesIndex * Math.floor(this._image.width/this._image.xFrames), // punto en x donde empezar a recortar
      this._image.yFramesIndex * Math.floor(this._image.height/this._image.yFrames), // punto en y donde empezar a recortar
      Math.floor(this._image.width/this._image.xFrames), // punto en x donde terminar de recortar
      Math.floor(this._image.height/this._image.yFrames), // punto en y donde terminar de recortar
      this._posX,
      this._posY,
      this._width,
      this._height
      )
  }

  setListeners() {
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case this._keys.upArrow:
          if((this._map[this._currentY - 1][this._currentX] != 38)) {
            this._currentY -= 1
            this._posY = this._currentY*(this._gameHeight/20)
          } 
          break;

        case this._keys.downArrow:
          if((this._map[this._currentY + 1][this._currentX] != 38)) {
            this._currentY += 1
            this._posY = this._currentY*(this._gameHeight/20)
          }
          break;

        case this._keys.leftArrow:
          if ((this._map[this._currentY][this._currentX - 1] != 38)) {
            this._currentX -= 1
            this._posX = this._currentX*(this._gameWidth/32)
          }

          break;

        case this._keys.rightArrow:
          if (this._map[this._currentY][this._currentX + 1] != 38) {
            this._currentX += 1
            this._posX = this._currentX*(this._gameWidth/32)
          }         
          break;    
      }
    }
  }

  checkNextPos(y,x) {
    this._map[this._currentY + y][this._currentX + x] != 38
  }

}




