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

  // Window 1
  if (game.input.mousePointer.x > 80 && game.input.mousePointer.x < 185 &&
    game.input.mousePointer.y > 750 && game.input.mousePointer.y < 960) {
    if (sprite.x > 80 && sprite.x < 185) {
      let rTest = this.add.rectangle(80, 750, 105, 210, 0xff0000);
    }
  }

  // Window 2
  if (game.input.mousePointer.x > 280 && game.input.mousePointer.x < 385 &&
    game.input.mousePointer.y > 750 && game.input.mousePointer.y < 960) {
    if (sprite.x > 280 && sprite.x < 385) {
      let rTest = this.add.rectangle(280, 750, 105, 210, 0x00ff00);
    }
  }

  // Window 3
  if (game.input.mousePointer.x > 477 && game.input.mousePointer.x < 582 &&
    game.input.mousePointer.y > 750 && game.input.mousePointer.y < 960) {
    if (sprite.x > 477 && sprite.x < 582) {
      let rTest = this.add.rectangle(477, 750, 105, 210, 0x0000ff);
    }
  }

  // Window 4
  if (game.input.mousePointer.x > 700 && game.input.mousePointer.x < 805 &&
    game.input.mousePointer.y > 750 && game.input.mousePointer.y < 960) {
    if (sprite.x > 700 && sprite.x < 805) {
      let rTest = this.add.rectangle(700, 750, 105, 210, 0xff00f0);
    }
  }

  // Window 5
  if (game.input.mousePointer.x > 1120 && game.input.mousePointer.x < 1225 &&
    game.input.mousePointer.y > 750 && game.input.mousePointer.y < 960) {
    if (sprite.x > 1120 && sprite.x < 1225) {
      let rTest = this.add.rectangle(1120, 750, 105, 210, 0x0fff00);
    }
  }

  // Window 6
  if (game.input.mousePointer.x > 1335 && game.input.mousePointer.x < 1440 &&
    game.input.mousePointer.y > 750 && game.input.mousePointer.y < 960) {
    if (sprite.x > 1335 && sprite.x < 1440) {
      let rTest = this.add.rectangle(1335, 750, 105, 210, 0x00ffff);
    }
  }

  // Window 7
  if (game.input.mousePointer.x > 1535 && game.input.mousePointer.x < 1640 &&
    game.input.mousePointer.y > 750 && game.input.mousePointer.y < 960) {
    if (sprite.x > 1535 && sprite.x < 1640) {
      let rTest = this.add.rectangle(1535, 750, 110, 210, 0xff00ff);
    }
  }

  // Window 8
  if (game.input.mousePointer.x > 1738 && game.input.mousePointer.x < 1843 &&
    game.input.mousePointer.y > 750 && game.input.mousePointer.y < 960) {
    if (sprite.x > 1738 && sprite.x < 1843) {
      let rTest = this.add.rectangle(1738, 750, 110, 210, 0x6666ff);
    }
  }
}
