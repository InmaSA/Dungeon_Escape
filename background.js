class Background {

  constructor(ctx, width, height) {
    this._ctx = ctx
    this._width = width
    this._height = height

    this._image = new Image()
    this._image.src = 'images/TEST7B.bmp'

    this._tileSize = 32 // lo que miden las teselas de lado
    this._rowsTiles = 11 // esto tengo que cambiarlo por el tamaño de mi array background
    this._columnsTiles = 8 // esto también
    this._tilesPerRow = 11



  }
}