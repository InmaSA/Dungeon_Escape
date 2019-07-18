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
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,152,153,153,153,153,153,153,153,153,38,38],
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38],
    [38,38,153,153,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,38],
    [38,38,153,153,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,38],
    [38,38,153,153,38,38,38,113,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,79,153,153,153,153,153,38,38],
    [38,38,153,153,38,38,38,129,153,153,153,153,153,153,152,153,153,153,153,153,153,153,153,38,153,153,153,153,153,153,38,38], // Aquí tengo la salida map[6][7]
    [38,38,153,153,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,153,153,38,38,153,153,38,38],
    [38,38,153,152,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,38,153,153,38,153,153,38,38,153,153,38,38],
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,38,153,153,38,153,153,153,153,153,153,38,38],
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,38,38,79,153,38,153,153,153,153,153,153,38,38],
    [38,38,38,38,38,153,79,38,38,38,38,38,38,38,38,38,153,153,38,38,38,153,153,38,38,38,38,38,153,153,38,38],
    [38,79,153,38,38,153,153,38,38,38,38,38,38,38,38,38,153,153,38,38,38,153,153,153,153,38,38,38,153,153,38,38],
    [38,153,153,38,38,153,153,153,153,152,153,153,153,153,153,153,153,153,38,38,38,153,153,153,153,38,38,38,153,153,38,38], 
    [38,153,153,38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,38,38,38,153,153,153,153,38,153,153,38,38],
    [38,153,153,38,38,38,38,38,38,38,38,38,153,153,38,38,38,38,38,38,38,38,38,153,153,153,153,38,153,153,38,38],
    [38,153,153,38,38,38,38,38,38,38,38,38,153,153,38,38,38,38,38,38,38,38,38,38,38,153,153,38,153,153,38,38],
    [38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,38,153,153,153,153,153,38,38],
    [38,0,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,79,38,38,152,153,153,153,153,38,38],
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38] // entrada map[19][0]  
  ],

  map2: [
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38],
    [38,38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38],
    [38,38,38,153,153,38,38,38,38,38,38,38,38,38,153,153,38,38,38,38,38,153,153,38,38,38,38,38,38,153,153,38],
    [38,38,38,153,153,38,38,153,153,153,153,38,38,38,153,153,38,38,38,38,38,153,153,38,38,38,38,38,38,153,153,38],
    [38,38,79,153,153,38,38,153,153,153,153,38,38,38,153,153,38,38,153,153,153,153,153,38,38,38,38,38,38,153,153,38],
    [38,38,153,153,153,38,38,153,153,153,153,153,153,153,153,153,38,38,153,153,153,153,153,38,38,38,38,38,38,153,153,38],
    [38,38,153,153,38,38,38,0,153,153,153,153,153,153,153,153,38,38,153,153,153,153,153,38,38,38,38,38,38,153,153,38],
    [38,38,153,153,38,38,38,38,38,153,153,38,38,38,38,38,38,38,153,153,38,153,153,153,153,153,153,153,153,153,153,38],
    [38,38,153,153,38,38,38,38,38,153,153,38,38,38,38,38,38,38,153,153,38,153,153,153,153,153,153,152,153,153,79,38],
    [38,38,153,153,38,38,38,38,38,153,153,38,38,38,38,38,38,38,153,153,38,153,153,38,38,38,38,38,38,38,38,38],
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,153,153,38,153,153,38,38,38,38,38,38,38,38,38],
    [38,38,153,153,153,152,153,153,153,153,153,153,153,153,153,153,153,38,153,153,38,153,153,38,38,38,38,38,38,38,38,38],
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,153,153,153,153,153,153,153,153,153,153,38],
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,153,153,38,153,153,153,153,153,153,153,153,153,153,38],
    [38,38,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,153,153,38,38,38,38,38,38,38,153,38],
    [38,38,79,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,153,38,153,152,38,38,38,38,38,38,38,153,38],
    [38,38,38,38,38,153,153,38,38,38,38,38,38,38,153,152,153,38,153,153,38,153,153,38,38,38,38,38,153,153,153,38],
    [38,38,38,38,38,153,153,38,38,38,38,38,38,38,153,153,153,38,153,153,153,153,153,38,38,38,38,38,113,153,153,38],
    [38,38,38,38,38,153,153,153,153,153,153,153,153,153,153,153,79,38,79,153,153,153,153,38,38,38,38,38,129,153,153,38],
    [38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38]
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
  currentTime: 120, 
  timeToDie: 0,
  levelCounter: 1,
  endGame: false,



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

  reset: function(whatMap) {
    this.background = new Background (this.ctx, this.width, this.height, whatMap)
    this.player = new Player (this.ctx, this.width, this.height, whatMap, this.keys, this.interval)
    this.counter = new Counter (this.ctx, this.width, this.height, whatMap, this.currentTime)
  },

  start: function(){

    this.reset(this.map)
   
    
    this.interval = setInterval(() => {
      this.framesCounter ++
      if (this.framesCounter % 60 == 0) {
        this.counter.countDown()
        this.timeToDie +=1}
        
      if(this.framesCounter == 1019) this.framesCounter = 0 
      
      this.clear()
      this.drawAll()

      if (this.levelCounter == 1) {
        this.setTraps(this.map)
      } else {
        this.getPoisoned(this.map2)}
        
        
      if(this.timeToDie >= 120) { 
        this.gameOver() 
        clearInterval(this.interval)
      }  
      this.player.checkTreasures()
      
      
      this.checkLevel()

      
      
      if(this.endGame) clearInterval(this.interval)
      
    }, 1000/60);  

  },

  drawAll: function() {
    this.background.draw() 
    this.player.draw()

    if (this.endGame == false) {this.counter.drawCounterDown() }
    if (this.player._findCoins == true) {this.player.foundChest() }
    if (this.player._noWantCoins == true) {this.player.leaveTheCoins() }
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvasDomObj.width, this.canvasDomObj.height)
  },

  gameOver: function() {   
      
      let gameOverImage = new Image ()
      gameOverImage.src = 'images/PdOiQPO-game-over-wallpaper.jpg'
      gameOverImage.onload = () => this.ctx.drawImage(gameOverImage, 0,0, this.width, this.height)
  },

  setTraps(whatMap) {
 
    if (whatMap[this.player._currentY][this.player._currentX] == 152)
      {
        
        whatMap[this.player._currentY][this.player._currentX] = 0

        this.player.findIndex()

        this.player._posX0 = this.player._currentX*(this.width/32)
        this.player._posY0 = this.player._currentY*(this.height/20)
    
        this.player._posX = this.player._posX0
        this.player._posY = this.player._posY0

        document.getElementById('trap').play()          
      }  
  },

  getPoisoned(whatMap) {
    if (whatMap[this.player._currentY][this.player._currentX] == 152) {
      this.ctx.font = "20px Artifika";
      this.ctx.fillStyle = "red";
      this.ctx.fillText('You get poisoned!!', 70, 100)
      document.getElementById('trap').play()
      setTimeout(() => {
        whatMap[this.player._currentY][this.player._currentX] = 153
      }, 1000); 
    } 
  },

  checkLevel () {
    if ((this.map[this.player._currentY][this.player._currentX] == 113 || this.map[this.player._currentY][this.player._currentX] == 129) && this.levelCounter === 1) 
       {
        this.levelCounter ++
       
        this.reset(this.map2)
        this.currentTime = 60
        this.timeToDie = 0

      } else if ((this.map2[this.player._currentY][this.player._currentX] == 113 || this.map2[this.player._currentY][this.player._currentX] == 129) && this.levelCounter === 2) {
        this.youWon()
        } 
      },
  

  youWon() {
    document.getElementById('win').play() 
    document.getElementById('dungeon-music').pause()
    
    this.endGame = true

    setTimeout(() => {
      this.ctx.font = "80px Artifika";
          this.ctx.fillStyle = "#E89D12";
          this.ctx.fillText('YOU DID IT!!', this.width/2 - 270, this.height/2 - 100)
    }, 3000);     
    
  }

}


