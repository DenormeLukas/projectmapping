import eventsCenter from './EventsCenter';

let outro;
let onceOutro = false;

class Outro extends Phaser.Scene {

    constructor() {
        super({ key: 'Outro' });
    }

    create() {
        this.sys.events.on('shutdown', this.shutdown);
        outro = this.add.video(0, 0, 'outro').setOrigin(0, 0);
        outro.play();

        // if (outro.getDuration() == outro.getProgress()) {
        //     eventsCenter.emit('restart', true);
        // }
        // // eventsCenter.emit('restart', true);

    }

    update() {
        // console.log('[outro] update');

        if (outro.getProgress() === 1) {
            this.game.scene.stop('Outro');
            this.game.scene.start('Intro');
        }
    }

    shutdown() {
        console.log('Outro shutdown');
    }
}

onceOutro = false;

export default Outro;