import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade'
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

const game = new Phaser.Game(config);

let sprite;
let light;
let offsets = [];

function preload() {

  //Background image
  this.load.image('background', 'assets/building-template.png');

  //Sprite
  this.load.image('shadow', 'assets/shadow.png');

}

function create() {

  this.add.image(0, 0, 'background').setOrigin(0, 0).setPipeline('Light2D');


  sprite = this.add.sprite(70, 910, 'shadow');
  sprite.scale = 0.1;

  light = this.lights.addLight(0, 0, 400).setScrollFactor(0.0).setIntensity(5);

  this.lights.enable().setAmbientColor(0x555555);

  this.input.on('pointermove', function (pointer) {

    light.x = pointer.x;
    light.y = pointer.y;

  });

  let scene = this;

  offsets = [Math.random() + 1 - 2, Math.random() + 1 - 2, Math.random() + 1 - 2, Math.random() + 1 - 2];


}

function update() {

  let index = 0;

  this.lights.lights.forEach(function (currLight) {
    if (light !== currLight) {
      currLight.x = 400 + Math.sin(offsets[index]) * 1000;
      offsets[index] += 0.02;
      index += 1;
    }
  });



}
