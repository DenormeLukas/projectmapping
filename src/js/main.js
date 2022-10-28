import Phaser from 'phaser';
import Intro from './intro';
import Outro from './outro';
import Game from './game';
import eventsCenter from './EventsCenter';

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

// start het spel als hij oke krijgt van intro
eventsCenter.on('startGame', function () {
  setTimeout(startGame, 500);
});

// setTimeout(startGame, 500);

eventsCenter.on('playOutro', function () {
  game.scene.add('Outro', outro);
  game.scene.start('Outro');
});

// function restartGame() {

//   this.registry.destroy(); // destroy registry
//   this.events.off(); // disable all active events
//   this.scene.restart(); // restart current scene

// }

// eventsCenter.on('restart', restartGame);
eventsCenter.on('restart', function () {
  console.log("Het spel is gedaan");
  game.scene.remove('Outro');
  game.scene.remove('Game');
  game.scene.start('Intro');
})





