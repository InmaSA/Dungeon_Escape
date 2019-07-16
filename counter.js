class Counter {
  constructor(ctx, width, height, map, currentTime) {
    this._ctx = ctx
    this._width = width
    this._height = height
    this._map = map
    this._currentTime = currentTime

    this._currentMinutes = 0
    this._currentSeconds =0

  }
    
   drawCounterDown() {
    this._ctx.font = "16px Artifika";
    this._ctx.fillStyle = "red";
    this._ctx.fillText("Time left: "+this._currentMinutes+" min "+this._currentSeconds+" sec", this._width - 200, this._height - 20) 
   } 
  


countDown(){
    this._currentTime -= 1

    this._currentMinutes = Math.floor(this._currentTime/60)
    this._currentSeconds = this._currentTime % 60 

}


}