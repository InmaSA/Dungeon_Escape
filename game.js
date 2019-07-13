const game = {
  title: 'Dungeon Scape',
  author: 'Inma',
  license: null,
  version: '1.0',
  canvasDomObj: undefined,
  ctx: undefined,

  width: undefined,
  height: undefined,
  canvasDiv: undefined,
  fillStyle: undefined,

  map: [],

  init: function (id) {
    this.canvasDomObj = document.getElementById(id)
    this.ctx = this.canvasDomObj.getContext('2d')
    this.canvasDiv = document.getElementById('game-board')

    this.width = (this.canvasDiv.offsetWidth)/ 1.5
    this.height = (this.canvasDiv.offsetHeight) * 4
    this.fillStyle = 'purple'

    this.canvasDomObj.setAttribute('width', this.width)
    this.canvasDomObj.setAttribute('height', this.height)


    this.start()
  },

  reset: function() {
  
  },

  start: function(){
    this.reset()
    this.drawAll()
  },


  drawAll: function() {
    this.drawFirstLayer('#93734D', 0, 0, this.width, this.height)
  },

  drawFirstLayer: function(color,x,y,w,h){
    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, w, h)
  }
}