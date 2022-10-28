import eventsCenter from './EventsCenter';

let outro;
let onceOutro = false;

class Outro extends Phaser.Scene {

    constructor() {
        super({ key: 'Outro' });
    }

    preload() {
        this.load.video('outro', 'assets/outro.mp4', 'loadeddata', false, false);
    }

    create() {
        outro = this.add.video(0, 0, 'outro').setOrigin(0, 0);
        outro.play();

        // if (outro.getDuration() == outro.getProgress()) {
        //     eventsCenter.emit('restart', true);
        // }
        // // eventsCenter.emit('restart', true);

    }

    update() {
        if (outro.getProgress() === 1) {
            if (!onceOutro) {
                onceOutro = true;
                eventsCenter.emit('restart', true);
            }
        }
    }

}

export default Outro;