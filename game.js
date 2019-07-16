const game = {
  title: 'Dungeon Escape',
  author: 'Inma',
  license: null,
  version: '1.0',
  canvasDomObj: undefined,
  ctx: undefined,

  width: undefined,
  height: undefined,
  canvasDiv: undefined,
  fillStyle: undefined,

  map: [
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38],
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38],
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38],
    [38,38,153,153,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,38],
    [38,38,153,153,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,38],
    [38,38,153,153,38,38,38,113,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,79,153,153,153,153,153,38,38],
    [38,38,153,153,38,38,38,129,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,153,153,153,153,153,153,38,38], // Aquí tengo la salida map[6][7]
    [38,38,153,153,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,153,153,38,38,153,153,38,38],
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,38,153,153,38,153,153,38,38,153,153,38,38],
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,38,153,153,38,153,153,153,153,153,153,38,38],
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,38,38,79,153,38,153,153,153,153,153,153,38,38],
    [38,38,38,38,38,153,79,38,38,38,38,38,38,38,38,38,153,153,38,38,38,153,153,38,38,38,38,38,153,153,38,38],
    [38,79,153,38,38,153,153,38,38,38,38,38,38,38,38,38,153,153,38,38,38,153,153,153,153,38,38,38,153,153,38,38],
    [38,153,153,38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,38,153,153,153,153,38,38,38,153,153,38,38], 
    [38,153,153,38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,38,38,38,153,153,153,153,38,153,153,38,38],
    [38,153,153,38,38,38,38,38,38,38,38,38,153,153,38,38,38,38,38,38,38,38,38,153,153,153,153,38,153,153,38,38],
    [38,153,153,38,38,38,38,38,38,38,38,38,153,153,38,38,38,38,38,38,38,38,38,38,38,153,153,38,153,153,38,38],
    [38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,153,153,153,153,153,38,38],
    [38,0,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,79,38,38,153,153,153,153,153,38,38],
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38] // entrada map[19][0]  
  ],

  keys: {
    upArrow: 38,
    downArrow: 40,
    leftArrow: 37,
    rightArrow: 39,
    yes: 89,
    no: 78
  },
  framesCounter: 0,
  currentTime: 180,
  timeToDie: 0,


  init: function (id) {
    this.canvasDomObj = document.getElementById(id)
    this.ctx = this.canvasDomObj.getContext('2d')
    this.canvasDiv = document.getElementById('game-board')

    this.width = 1024
    this.height = 640

    this.canvasDomObj.setAttribute('width', this.width)
    this.canvasDomObj.setAttribute('height', this.height)


    this.start()
  },

  reset: function() {
    this.background = new Background (this.ctx, this.width, this.height, this.map)
    this.player = new Player (this.ctx, this.width, this.height, this.map, this.keys)
    this.counter = new Counter (this.ctx, this.width, this.height, this.map, this.currentTime)
  },

  start: function(){
    this.reset()

    this.clear()
    this.interval = setInterval(() => {
      this.framesCounter ++
      if (this.framesCounter % 60 == 0) {
        this.counter.countDown()
        this.timeToDie +=1}

      if(this.framesCounter == 1019) this.framesCounter = 0 
      if(this.timeToDie >= 180) this.gameOver()
      
      this.drawAll()
      this.player.checkTreasures()

    }, 1000/60);  
  },

  drawAll: function() {
    this.background.draw() 
    this.player.draw()
    this.counter.drawCounterDown()

   if(this.player._findCoins == true) {this.player.foundChest() }
   if(this.player._noWantCoins == true) {this.player.leaveTheCoins() }
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvasDomObj.width, this.canvasDomObj.height)
  },

  gameOver: function() {              
    clearInterval(this.interval)
  }




}