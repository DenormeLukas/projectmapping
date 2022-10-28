import eventsCenter from './EventsCenter';
let onceIntro = false;
let intro;

class Intro extends Phaser.Scene {

    constructor() {
        super({ key: 'Intro' });
    }

    preload() {
        this.load.video('intro', 'assets/intro.mp4', 'loadeddata', false, false);
    }

    create() {

        intro = this.add.video(0, 0, 'intro').setOrigin(0, 0);
        intro.play();
        console.log("het spel begint");

    }

    // Stuurt signaal naar main
    // Dacht misschien is dit beter voor de loop, maar werkt niet
    // update() {
    //     if (intro.getProgress() === 1) {
    //         if (!onceIntro) {
    //             onceIntro = true;
    //             eventsCenter.emit('startGame', true);
    //         }
    //     }
    // }

}

export default Intro;