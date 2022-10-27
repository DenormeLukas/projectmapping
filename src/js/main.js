import Phaser from 'phaser';
import Intro from './intro';
import Outro from './outro';
import Game from './game';
import eventsCenter from './EventsCenter'

const intro = new Intro();
const outro = new Outro();
const game2 = new Game();

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

eventsCenter.on('playOutro', function () {
  game.scene.add('Outro', outro);
  game.scene.start('Outro');
});

setTimeout(startGame, 500);

