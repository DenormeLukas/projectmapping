let sprite;
let window1, window2, window3, window4, window5, window6, window7, window8;
let light;
let offsets = [];
let arrowKeys;
let once, once2, once3, once4, once5, once6, once7, once8 = false;

let amount = 0;

//Frames
let lightFrames = [];
let window1Frames = [];
let window2Frames = [];
let window3Frames = [];
let window4Frames = [];
let window5Frames = [];
let window6Frames = [];

let count = 8;
let xStart = [132.5, 332.5, 529.5, 752.5, 1172.5, 1387.5, 1587.5, 1790.5];
let xShow = [80, 280, 477, 700, 1120, 1335, 1535, 1738];
let xEnd = [185, 385, 582, 805, 1225, 1440, 1640, 1843];
let colors = [0xff0000, 0x00ff00, 0x0000ff, 0xff00f0, 0x0fff00, 0x00ffff, 0xff00ff, 0x6666ff];
let countArr = [];
let itemArr = 1;

class Game extends Phaser.Scene {

    constructor() {
        super({ key: 'Game' });
    }

    preload() {

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

        //Background-image
        const image = this.add.image(0, 0, 'background').setOrigin(0, 0).setPipeline('Light2D');

        //Window 1

        for (let i = 0; i <= 129; i++) {

            let temp = { key: 'window1frame' + i };
            window1Frames.push(temp);

        }

        this.anims.create({
            key: 'window1Animation',
            frames: window1Frames,
            frameRate: 25,
            repeat: 0
        });

        window1 = this.add.sprite(130, 845, 'window1frame0');

        //Window 2

        for (let i = 0; i <= 72; i++) {

            let temp = { key: 'window2frame' + i };
            window2Frames.push(temp);

        }

        this.anims.create({
            key: 'window2Animation',
            frames: window2Frames,
            frameRate: 25,
            repeat: 0
        });

        window2 = this.add.sprite(330, 845, 'window6frame0');

        //Window 3

        for (let i = 0; i <= 128; i++) {

            let temp = { key: 'window3frame' + i };
            window3Frames.push(temp);

        }

        this.anims.create({
            key: 'window3Animation',
            frames: window3Frames,
            frameRate: 25,
            repeat: 0
        });

        window3 = this.add.sprite(530, 845, 'window3frame0');

        //Window 4

        for (let i = 0; i <= 148; i++) {

            let temp = { key: 'window4frame' + i };
            window4Frames.push(temp);

        }

        this.anims.create({
            key: 'window4Animation',
            frames: window4Frames,
            frameRate: 25,
            repeat: 0
        });

        window4 = this.add.sprite(750, 845, 'window6frame0');

        //Window 5

        for (let i = 0; i <= 150; i++) {

            let temp = { key: 'window5frame' + i };
            window5Frames.push(temp);

        }

        this.anims.create({
            key: 'window5Animation',
            frames: window5Frames,
            frameRate: 25,
            repeat: 0
        });

        window5 = this.add.sprite(1168, 845, 'window5frame0');

        //Window 6

        for (let i = 0; i <= 147; i++) {

            let temp = { key: 'window6frame' + i };
            window6Frames.push(temp);

        }

        this.anims.create({
            key: 'window6Animation',
            frames: window6Frames,
            frameRate: 25,
            repeat: 0
        });

        window6 = this.add.sprite(1387, 845, 'window6frame0');

        window7 = this.add.sprite(1590, 845, 'window2frame0');

        window8 = this.add.sprite(1790, 845, 'window4frame0');



        //Lights up top

        for (let i = 0; i <= 226; i++) {

            let temp = { key: 'lightframe' + i };
            lightFrames.push(temp);

        }

        this.anims.create({
            key: 'lightAnimation',
            frames: lightFrames,
            frameRate: 25,
            repeat: -1
        });

        //Lights top
        const lights = this.add.sprite(0, 0, 'lightframe0').setOrigin(0, 0).play('lightAnimation');


        //Shadowman
        sprite = this.physics.add.sprite(100, 955, "shadow");
        sprite.scale = 0.85;

        const config = {
            key: "shadowAnimation",
            frames: this.anims.generateFrameNumbers("shadow", {
                start: 0,
                end: 7,
                first: 0
            }),
            frameRate: 12.5,
            repeat: -1
        };

        sprite.anims.create(config);

        // sprite = this.physics.add.sprite(1000, 965, 'shadow');
        // sprite.setCollideWorldBounds(true);
        // sprite.scale = 0.4;

        // Disable menu when right clicking
        this.input.mouse.disableContextMenu();

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

    update() {

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
        this.physics.moveTo(sprite, this.input.mousePointer.x, 955, 200);

        if (this.input.mousePointer.x > sprite.x) {
            sprite.flipX = false;
        } else if (this.input.mousePointer.x < sprite.x) {
            sprite.flipX = true;
        }

        // Verdere interactie
        if (arrowKeys.up.isDown) {
            console.log("up");
        }

        if (arrowKeys.down.isDown) {
            console.log("down");
        }

        // Window 1

        if (this.input.mousePointer.x > 80 && this.input.mousePointer.x < 185 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (sprite.x > 80 && sprite.x < 185) {
                if (!once) {
                    window1.play('window1Animation');
                    once = true;
                    sprite.visible = false;
                    setTimeout(function () {
                        sprite.visible = true;
                    }, 6000);
                    amount++;
                }
            }
        }
        if (sprite.x > 50 && sprite.x < 215) {
            if (once) {
                sprite.visible = false;
                setTimeout(function () {
                    sprite.visible = true;
                }, 1000);
            }
        }

        // Window 2

        if (this.input.mousePointer.x > 280 && this.input.mousePointer.x < 385 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (sprite.x > 280 && sprite.x < 385) {
                if (!once2) {
                    window2.play('window6Animation');
                    once2 = true;
                    sprite.visible = false;
                    setTimeout(function () {
                        sprite.visible = true;
                    }, 6000);
                    amount++;
                }

            }
        }
        if (sprite.x > 250 && sprite.x < 415) {
            if (once2) {
                sprite.visible = false;
                setTimeout(function () {
                    sprite.visible = true;
                }, 1000);
            }
        }

        // Window 3

        if (this.input.mousePointer.x > 477 && this.input.mousePointer.x < 582 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (sprite.x > 477 && sprite.x < 582) {
                if (!once3) {
                    window3.play('window3Animation');
                    once3 = true;
                    sprite.visible = false;
                    setTimeout(function () {
                        sprite.visible = true;
                    }, 5000);
                    amount++;
                }

            }
        }
        if (sprite.x > 447 && sprite.x < 612) {
            if (once3) {
                sprite.visible = false;
                setTimeout(function () {
                    sprite.visible = true;
                }, 1000);
            }
        }

        // Window 4

        if (this.input.mousePointer.x > 700 && this.input.mousePointer.x < 805 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (sprite.x > 700 && sprite.x < 805) {
                if (!once4) {
                    window4.play('window6Animation');
                    once4 = true;
                    sprite.visible = false;
                    setTimeout(function () {
                        sprite.visible = true;
                    }, 6000);
                    amount++;
                }

            }
        }
        if (sprite.x > 670 && sprite.x < 835) {
            if (once4) {
                sprite.visible = false;
                setTimeout(function () {
                    sprite.visible = true;
                }, 1000);
            }
        }

        // Window 5

        if (this.input.mousePointer.x > 1120 && this.input.mousePointer.x < 1225 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (sprite.x > 1120 && sprite.x < 1225) {
                if (!once5) {
                    window5.play('window5Animation');
                    once5 = true;
                    sprite.visible = false;
                    setTimeout(function () {
                        sprite.visible = true;
                    }, 6000);
                    amount++;
                }

            }
        }
        if (sprite.x > 1090 && sprite.x < 1255) {
            if (once5) {
                sprite.visible = false;
                setTimeout(function () {
                    sprite.visible = true;
                }, 1000);
            }
        }

        // Window 6

        if (this.input.mousePointer.x > 1335 && this.input.mousePointer.x < 1440 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (sprite.x > 1335 && sprite.x < 1440) {
                if (!once6) {
                    window6.play('window6Animation');
                    once6 = true;
                    sprite.visible = false;
                    setTimeout(function () {
                        sprite.visible = true;
                    }, 6000);
                    amount++;
                }

            }
        }
        if (sprite.x > 1305 && sprite.x < 1470) {
            if (once6) {
                sprite.visible = false;
                setTimeout(function () {
                    sprite.visible = true;
                }, 1000);
            }
        }

        // Window 7

        if (this.input.mousePointer.x > 1535 && this.input.mousePointer.x < 1640 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (sprite.x > 1535 && sprite.x < 1640) {
                if (!once7) {
                    window7.play('window2Animation');
                    once7 = true;
                    sprite.visible = false;
                    setTimeout(function () {
                        sprite.visible = true;
                    }, 3000);
                    amount++;
                }

            }
        }
        if (sprite.x > 1505 && sprite.x < 1670) {
            if (once7) {
                sprite.visible = false;
                setTimeout(function () {
                    sprite.visible = true;
                }, 1000);
            }
        }

        // Window 8

        if (this.input.mousePointer.x > 1738 && this.input.mousePointer.x < 1843 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (sprite.x > 1738 && sprite.x < 1843) {
                if (!once8) {
                    window8.play('window4Animation');
                    once8 = true;
                    sprite.visible = false;
                    setTimeout(function () {
                        sprite.visible = true;
                    }, 6000);
                    amount++;
                }

            }
        }
        if (sprite.x > 1708 && sprite.x < 1873) {
            if (once8) {
                sprite.visible = false;
                setTimeout(function () {
                    sprite.visible = true;
                }, 1000);
            }
        }

        // changes colors on scroll --- maybe handy --- maybe not
        // this.input.on('wheel', function (color) {
        //     let r = Math.floor(Math.random() * 4);
        //     let g = Math.floor(Math.random() * 4);
        //     let b = Math.floor(Math.random() * 4);
        //     light.color._rgb[0] = r;
        //     light.color._rgb[1] = g;
        //     light.color._rgb[2] = b;
        // });

    }
}

export default Game;