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

let sprite, sprite2;
let light;
let offsets = [];

function preload() {

  //Background image
  this.load.image('background', 'assets/building-template.png');

  //Neon image
  this.load.image('neon', 'assets/neon.png');

  //Sprite
  this.load.image('shadow', 'assets/man.png');

}

function create() {

  //Background-image
  const image = this.add.image(0, 0, 'background').setOrigin(0, 0).setPipeline('Light2D');

  //Neon-image
  const neon = this.add.image(0, 0, 'neon').setOrigin(0, 0);

  //Shadowman
  sprite = this.physics.add.sprite(1000, 965, 'shadow');
  sprite.setCollideWorldBounds(true);
  sprite.scale = 0.20;


  //Lights
  light = this.lights.addLight(0, 0, 300).setScrollFactor(0.0).setIntensity(4);

  this.lights.enable().setAmbientColor(0x555555);

  this.input.on('pointermove', function (pointer) {

    light.x = pointer.x;
    light.y = pointer.y;

  });

  let scene = this;

  offsets = [Math.random() + 1 - 2, Math.random() + 1 - 2, Math.random() + 1 - 2, Math.random() + 1 - 2];

  //Mask
  const shape = this.make.graphics();

  //  Create a hash shape Graphics object
  shape.fillStyle(0xff0000);

  //  You have to begin a path for a Geometry mask to work
  shape.beginPath();

  //Making the mask for shadow 

  shape.fillRect(80, 750, 105, 210);
  shape.fillRect(280, 750, 105, 210);
  shape.fillRect(477, 750, 105, 210);
  shape.fillRect(700, 750, 105, 210);

  shape.fillRect(1120, 750, 105, 210);
  shape.fillRect(1335, 750, 105, 210);
  shape.fillRect(1535, 750, 110, 210);
  shape.fillRect(1738, 750, 110, 210);

  const mask = shape.createGeometryMask();

  sprite.setMask(mask);

}

function update() {

  let index = 0;

  //Cursor light
  this.lights.lights.forEach(function (currLight) {
    if (light !== currLight) {
      currLight.x = 400 + Math.sin(offsets[index]) * 1000;
      offsets[index] += 0.02;
      index += 1;
    }
  });

  //Move shadow to cursor, 150 speed
  this.physics.moveTo(sprite, game.input.mousePointer.x, 965, 150);


}
