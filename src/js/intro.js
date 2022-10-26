class Intro extends Phaser.Scene {

    constructor() {
        super({ key: 'Intro' });
    }

    preload() {
        this.load.video('intro', 'assets/intro.mp4', 'loadeddata', false, false);
    }

    create() {
        const intro = this.add.video(0, 0, 'intro').setOrigin(0, 0);
        intro.play();


    }

}

export default Intro;