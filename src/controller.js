class Controller {
  constructor(p1, p2, l3, l4, timer) {
    this.canvas = document.querySelector('canvas');
    this.p1 = p1
    this.p2 = p2
    this.l3 = l3
    this.l4 = l4
    this.timer = timer
    this.finishLine = 780
    this.stopwatch = setInterval(this.stopAtFinish.bind(this), 10)
    this.mouseOn = true
  }

  enableControls() {
    this.canvas.onkeyup = function(e) {
      if(e.keyCode == 65) { display.player.move() }
      if(e.keyCode == 76) { display.player2.move() }
    }
  }

  aiMove() {
    this.l3.move()
    this.l4.move()
  }

  stopAtFinish() {
    if(this.p1.x > this.finishLine) { this.p1.moveAllowed = false }
    if(this.p2.x > this.finishLine) { this.p2.moveAllowed = false }
    if(this.l3.x > 845) { this.l3.moveAllowed = false }
    if(this.l4.x > 845) { this.l4.moveAllowed = false }
    this.finishGame();
  }

  finishGame() {
    var p1fin = this.p1.x > this.finishLine
    var p2fin = this.p2.x > this.finishLine
    var l3fin = this.l3.x > 845
    var l4fin = this.l4.x > 845
    if(p1fin && p2fin && l3fin && l4fin) {
      this.timer.stop()
      clearInterval(this.stopwatch)
      clearInterval(display.interval)
      display.drawCanvas()
      this.mouseOn = true
      display.drawReplay()
    }
  }

  restart() {
    this.p1.reset(-8,35)
    this.p2.reset(-8, 160)
    this.l3.reset(50, 332)
    this.l4.reset(50, 450)
    this.timer.reset()
    display.time1 = null
    display.time2 = null
    this.stopwatch = setInterval(this.stopAtFinish.bind(this), 10)
  }

}
