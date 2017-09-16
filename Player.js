const Gameboard = require('./Gameboard.js')

let Player = function (socket) {
  this.socket = socket
  this.gameBoard = {}
  this.bingoed = false
  this.gameUUID = {}
  this.initGameBoard()
}

Player.prototype.setBingoed = function (flag) {
  this.bingoed = flag
}

Player.prototype.isBingo = function () {
  return this.bingoed
}

Player.prototype.setGameUUID = function (uuid) {
  this.gameUUID = uuid
}

Player.prototype.getGameUUID = function (uuid) {
  return this.gameUUID
}

Player.prototype.initGameBoard = function () {
  this.gameBoard = new Gameboard()
}

module.exports = Player