import Phaser from 'phaser';
import Intro from './intro';
import Game from './game';

const intro = new Intro();
const game2 = new Game();

let amount = 0;

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade'
  }
}

const game = new Phaser.Game(config);

game.scene.add('Intro', intro);
game.scene.start('Intro');

function startGame() {

  game.scene.add('Game', game2);
  game.scene.start('Game');

}

setTimeout(startGame, 9000);

