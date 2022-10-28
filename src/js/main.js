import Phaser from 'phaser';
import Boot from './boot';
import Intro from './intro';
import Outro from './outro';
import Game from './game';
import eventsCenter from './EventsCenter';

const boot = new Boot();
const intro = new Intro();
const outro = new Outro();
const game2 = new Game();
let startGameOnce = false;

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade'
  }
}

const game = new Phaser.Game(config);

game.scene.add('Boot', boot);
game.scene.add('Intro', intro);
game.scene.add('Game', game2);
game.scene.add('Outro', outro);

game.scene.start('Boot');

// function restartGame() {

//   this.registry.destroy(); // destroy registry
//   this.events.off(); // disable all active events
//   this.scene.restart(); // restart current scene

// }

// eventsCenter.on('restart', restartGame);



