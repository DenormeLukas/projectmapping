import eventsCenter from './EventsCenter';

let intro;

class Intro extends Phaser.Scene {

    constructor() {
        super({ key: 'Intro' });

    }

    create() {
        this.sys.events.on('shutdown', this.shutdown);

        intro = this.add.video(0, 0, 'intro').setOrigin(0, 0);
        intro.play();
        console.log("het spel begint");
    }

    // Stuurt signaal naar main
    // Dacht misschien is dit beter voor de loop, maar werkt niet
    update() {
        // console.log('[intro] update');

        if (intro.getProgress() === 1) {
            this.game.scene.stop('Intro');
            this.game.scene.start('Game');
        }
    }

    shutdown() {
        console.log('Intro shutdown');
    }
}

export default Intro;