class Outro extends Phaser.Scene {

    constructor() {
        super({ key: 'Outro' });
    }

    preload() {
        this.load.video('outro', 'assets/outro.mp4', 'loadeddata', false, false);
    }

    create() {
        const outro = this.add.video(0, 0, 'outro').setOrigin(0, 0);
        outro.play();
    }

}

export default Outro;