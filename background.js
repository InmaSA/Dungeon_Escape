class Background {

  constructor(ctx, width, height, map) {
    this._ctx = ctx
    this._width = width
    this._height = height
    this._map = map

    this._posX = 0
    this._posY = 0

    this._image = new Image()
    this._image.src = 'images/TEST6.bmp'

    this._tileSize = 32 // lo que miden las teselas de lado
    this._rowsTiles = 20 // las filas de mi array binario
    this._columnsTiles = 32 // las columnas de mi array binario
    this._tilesPerRow = 16 // el nº de teselas en cada fila de la imagen

  }

  draw() {
    
    for (let r = 0; r < this._rowsTiles; r++) {
      for (let c = 0; c < this._columnsTiles; c++) {
         let tile = this._map[r][c]
         let tileRow = Math.floor(tile / this._tilesPerRow)
         let tileColumn = Math.floor(tile % this._tilesPerRow)
         
         this._ctx.drawImage(
           this._image,
          (tileColumn * this._tileSize), 
          (tileRow * this._tileSize), 
          this._tileSize, 
          this._tileSize, // indico desde donde quiero que coja la imagen de la tesela
          (c * this._tileSize), 
          (r * this._tileSize), 
          this._tileSize, 
          this._tileSize) // indico en qué lugar del canvas tiene que dibujarla
        }
      }      
    }
}      


  
    



