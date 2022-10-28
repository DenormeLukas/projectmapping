import eventsCenter from './EventsCenter';

class Intro extends Phaser.Scene {

    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        this.load.video('intro', 'assets/intro.mp4', 'loadeddata', false, false);
        this.load.video('outro', 'assets/outro.mp4', 'loadeddata', false, false);

        //Background image
        this.load.image('background', 'assets/building-template.png');

        //Neon image
        this.load.image('neon', 'assets/neon.png');

        //Sprite
        // this.load.image("shadow", 'assets/spritesheet.png');

        this.load.spritesheet("shadow", "assets/spritesheet.png", {
            frameWidth: 184,
            frameHeight: 288
        });

        //Window 1

        for (let i = 0; i <= 129; i++) {
            let nr = `${i}`.padStart(5, '0')
            this.load.image('window1frame' + i, 'assets/window1-sequence/window aniamtion _' + nr + '.png');
        }

        //Window 2

        for (let i = 0; i <= 72; i++) {
            let nr = `${i}`.padStart(5, '0')
            this.load.image('window2frame' + i, 'assets/window2-sequence/bats _' + nr + '.png');
        }

        //Window 3

        for (let i = 0; i <= 128; i++) {
            let nr = `${i}`.padStart(5, '0')
            this.load.image('window3frame' + i, 'assets/window3-sequence/spider _' + nr + '.png');
        }

        //Window 4

        for (let i = 0; i <= 148; i++) {
            let nr = `${i}`.padStart(5, '0')
            this.load.image('window4frame' + i, 'assets/window4-sequence/witch _' + nr + '.png');
        }

        //Window 5

        for (let i = 0; i <= 150; i++) {
            let nr = `${i}`.padStart(5, '0')
            this.load.image('window5frame' + i, 'assets/window5-sequence/spook_' + nr + '.png');
        }

        //Window 6

        for (let i = 0; i <= 147; i++) {
            let nr = `${i}`.padStart(5, '0')
            this.load.image('window6frame' + i, 'assets/window6-sequence/man_' + nr + '.png');
        }

        //Loop Top

        for (let i = 0; i <= 226; i++) {
            let nr = `${i}`.padStart(5, '0')
            this.load.image('lightframe' + i, 'assets/lights/lights_' + nr + '.png');
        }
    }

    create() {
        this.events.on('shutdown', this.shutdown);
        this.game.scene.stop('Boot');
        this.game.scene.start('Intro');
    }

    update() {
        // console.log('[boot] update');
    }

    shutdown() {
        console.log('Boot shutdown');
    }
}

export default Intro;