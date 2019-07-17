class Counter {
  constructor(ctx, width, height, map, currentTime) {
    this._ctx = ctx
    this._width = width
    this._height = height
    this._map = map
    this._currentTime = currentTime

    this._currentMinutes = '01' //'02'
    this._currentSeconds =  '00' //'00'

  }
    
  drawCounterDown() {
    this._ctx.font = "20px Artifika";
    this._ctx.fillStyle = "red";
    this._ctx.fillText("Time left   "+this._currentMinutes+":"+this._currentSeconds, this._width - 200, this._height - 20) 
  } 

  countDown(){
    this._currentTime -= 1

    this._currentMinutes = Math.floor(this._currentTime/60)
    this._currentMinutes = this._currentMinutes.toString()
    if(this._currentMinutes.length == 1) {
      this._currentMinutes = '0' + this._currentMinutes
    }

    this._currentSeconds = this._currentTime % 60
    this._currentSeconds = this._currentSeconds.toString()
    if(this._currentSeconds.length == 1) {
      this._currentSeconds = '0' + this._currentSeconds
    }

  }


}

