import 'phaser';

const config = {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 1920,
  height: 1080,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let sprite;

let game = new Phaser.Game(config);

function preload() {

  //Background image
  this.load.image('background', 'assets/building-template.png');

  //Sprite
  this.load.image('shadow', 'assets/shadow.png');

}

function create() {

  this.add.image(0, 0, 'background').setOrigin(0, 0);

  sprite = this.add.sprite(70, 910, 'shadow');
  sprite.scale = 0.1;
}

function update() {



}
