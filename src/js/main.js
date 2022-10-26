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
let arrowKeys;

function preload() {

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
}

function create() {

  //Background-image
  const image = this.add.image(0, 0, 'background').setOrigin(0, 0).setPipeline('Light2D');

  //Neon-image
  const neon = this.add.image(0, 0, 'neon').setOrigin(0, 0);

  //Shadowman
  sprite = this.physics.add.sprite(100, 965, "shadow");
  sprite.scale = 0.75;

  const config = {
    key: "shadowAnimation",
    frames: this.anims.generateFrameNumbers("shadow", {
      start: 0,
      end: 14,
      first: 0
    }),
    frameRate: 12.5,
    repeat: -1
  };

  sprite.anims.create(config);

  // sprite = this.physics.add.sprite(1000, 965, 'shadow');
  // sprite.setCollideWorldBounds(true);
  // sprite.scale = 0.4;


  //Lights
  light = this.lights.addLight(0, 0, 300).setScrollFactor(0.0).setIntensity(4);

  this.lights.enable().setAmbientColor(0x555555);

  this.input.on('pointermove', function (pointer) {

    light.x = pointer.x;
    light.y = pointer.y;

  });

  // Makes light intensity stronger when pushing a button
  this.input.on('pointerdown', function () {
    light.setIntensity(8);
  });

  // Makes light intensity weaker when pushing a button
  this.input.on('pointerup', function () {
    light.setIntensity(4);
  });

  arrowKeys = this.input.keyboard.createCursorKeys();

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

  sprite.play("shadowAnimation");

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

  if (game.input.mousePointer.x > sprite.x) {
    sprite.flipX = false;
  } else if (game.input.mousePointer.x < sprite.x) {
    sprite.flipX = true;
  }


  let count = 8;
  let xStart = [132.5, 332.5, 529.5, 752.5, 1172.5, 1387.5, 1587.5, 1790.5];
  let xShow = [80, 280, 477, 700, 1120, 1335, 1535, 1738];
  let xEnd = [185, 385, 582, 805, 1225, 1440, 1640, 1843];
  let colors = [0xff0000, 0x00ff00, 0x0000ff, 0xff00f0, 0x0fff00, 0x00ffff, 0xff00ff, 0x6666ff];
  console.log(sprite.x);

  for (let i = 0; i < count; i++) {
    if (game.input.mousePointer.x > xShow[i] && game.input.mousePointer.x < xEnd[i] &&
      game.input.mousePointer.y > 600 && game.input.mousePointer.y < 960) {
      if (sprite.x > xShow[i] && sprite.x < xEnd[i]) {
        let rTest = this.add.rectangle(xStart[i], 847.5, 104.5, 237.5, colors[i]);
      }
    }
  }

  // Verdere interactie
  if (arrowKeys.up.isDown) {
    console.log("up");
  }

  if (arrowKeys.down.isDown) {
    console.log("down");
  }
}
