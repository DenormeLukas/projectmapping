import eventsCenter from './EventsCenter'

class Game extends Phaser.Scene {

    sprite;
    window1;
    window2;
    window3;
    window4;
    window5;
    window6;
    window7;
    window8;
    light;
    offsets = [];
    arrowKeys;
    once;
    once2;
    once3;
    once4;
    once5;
    once6;
    once7;
    once8;
    onceOutro;
    //Frames
    lightFrames = [];
    window1Frames = [];
    window2Frames = [];
    window3Frames = [];
    window4Frames = [];
    window5Frames = [];
    window6Frames = [];

    amount = 0;

    constructor() {
        super({ key: 'Game' });
    }

    create() {
        this.sys.events.on('shutdown', this.shutdown);

        this.offsets = [];
        this.once = false;
        this.once2 = false;
        this.once3 = false;
        this.once4 = false;
        this.once5 = false;
        this.once6 = false;
        this.once7 = false;
        this.once8 = false;
        this.onceOutro = false;
        this.lightFrames = [];
        this.window1Frames = [];
        this.window2Frames = [];
        this.window3Frames = [];
        this.window4Frames = [];
        this.window5Frames = [];
        this.window6Frames = [];

        //Background-image
        const image = this.add.image(0, 0, 'background').setOrigin(0, 0).setPipeline('Light2D');

        //Window 1

        for (let i = 0; i <= 129; i++) {

            let temp = { key: 'window1frame' + i };
            this.window1Frames.push(temp);

        }

        this.anims.create({
            key: 'window1Animation',
            frames: this.window1Frames,
            frameRate: 25,
            repeat: 0
        });

        this.window1 = this.add.sprite(130, 845, 'window1frame0');

        //Window 2

        for (let i = 0; i <= 72; i++) {

            let temp = { key: 'window2frame' + i };
            this.window2Frames.push(temp);

        }

        this.anims.create({
            key: 'window2Animation',
            frames: this.window2Frames,
            frameRate: 25,
            repeat: 0
        });

        this.window2 = this.add.sprite(330, 845, 'window6frame0');

        //Window 3

        for (let i = 0; i <= 128; i++) {

            let temp = { key: 'window3frame' + i };
            this.window3Frames.push(temp);

        }

        this.anims.create({
            key: 'window3Animation',
            frames: this.window3Frames,
            frameRate: 25,
            repeat: 0
        });

        this.window3 = this.add.sprite(530, 845, 'window3frame0');

        //Window 4

        for (let i = 0; i <= 148; i++) {

            let temp = { key: 'window4frame' + i };
            this.window4Frames.push(temp);

        }

        this.anims.create({
            key: 'window4Animation',
            frames: this.window4Frames,
            frameRate: 25,
            repeat: 0
        });

        this.window4 = this.add.sprite(750, 845, 'window6frame0');

        //Window 5

        for (let i = 0; i <= 150; i++) {

            let temp = { key: 'window5frame' + i };
            this.window5Frames.push(temp);

        }

        this.anims.create({
            key: 'window5Animation',
            frames: this.window5Frames,
            frameRate: 25,
            repeat: 0
        });

        this.window5 = this.add.sprite(1168, 845, 'window5frame0');

        //Window 6

        for (let i = 0; i <= 147; i++) {

            let temp = { key: 'window6frame' + i };
            this.window6Frames.push(temp);

        }

        this.anims.create({
            key: 'window6Animation',
            frames: this.window6Frames,
            frameRate: 25,
            repeat: 0
        });

        this.window6 = this.add.sprite(1387, 845, 'window6frame0');

        this.window7 = this.add.sprite(1590, 845, 'window2frame0');

        this.window8 = this.add.sprite(1790, 845, 'window4frame0');



        //Lights up top

        for (let i = 0; i <= 226; i++) {

            let temp = { key: 'lightframe' + i };
            this.lightFrames.push(temp);

        }

        this.anims.create({
            key: 'lightAnimation',
            frames: this.lightFrames,
            frameRate: 25,
            repeat: -1
        });

        //Lights top
        this.add.sprite(0, 0, 'this.lightframe0').setOrigin(0, 0).play('lightAnimation');


        //Shadowman
        this.sprite = this.physics.add.sprite(100, 955, "shadow");
        this.sprite.scale = 0.85;

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

        this.sprite.anims.create(config);

        // sprite = this.physics.add.sprite(1000, 965, 'shadow');
        // sprite.setCollideWorldBounds(true);
        // sprite.scale = 0.4;

        // Disable menu when right clicking
        this.input.mouse.disableContextMenu();

        //Lights
        this.light = this.lights.addLight(0, 0, 300).setScrollFactor(0.0).setIntensity(4);

        this.lights.enable().setAmbientColor(0x555555);

        this.input.on('pointermove', function (pointer) {

            this.light.x = pointer.x;
            this.light.y = pointer.y;

        }, this);

        // Makes this.light intensity stronger when pushing a button
        this.input.on('pointerdown', function () {
            this.light.setIntensity(8);
        }, this);

        // Makes this.light intensity weaker when pushing a button
        this.input.on('pointerup', function () {
            this.light.setIntensity(4);
        }, this);

        this.arrowKeys = this.input.keyboard.createCursorKeys();

        this.offsets = [Math.random() + 1 - 2, Math.random() + 1 - 2, Math.random() + 1 - 2, Math.random() + 1 - 2];

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

        this.sprite.setMask(mask);

        this.sprite.play("shadowAnimation");

    }

    update() {
        // console.log('[game] update');
        let self = this;


        let index = 0;

        //Cursor this.light
        this.lights.lights.forEach(function (currLight) {
            if (self.light !== currLight) {
                currLight.x = 400 + Math.sin(self.offsets[index]) * 1000;
                self.offsets[index] += 0.02;
                index += 1;
            }
        });

        //Move shadow to cursor, 150 speed
        this.physics.moveTo(this.sprite, this.input.mousePointer.x, 955, 200);

        if (this.input.mousePointer.x > this.sprite.x) {
            this.sprite.flipX = false;
        } else if (this.input.mousePointer.x < this.sprite.x) {
            this.sprite.flipX = true;
        }

        // Verdere interactie
        if (this.arrowKeys.up.isDown) {
            console.log("up");
        }

        if (this.arrowKeys.down.isDown) {
            console.log("down");
        }

        // Window 1

        if (this.input.mousePointer.x > 80 && this.input.mousePointer.x < 185 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (this.sprite.x > 80 && this.sprite.x < 185) {
                if (!this.once) {
                    this.window1.play('window1Animation');
                    const cat = this.sound.add("cat", { loop: false });
                    cat.play();
                    this.once = true;
                    this.sprite.visible = false;
                    setTimeout(function () {
                        self.sprite.visible = true;
                    }, 6000);
                    this.amount++;
                }
            }
        }
        if (this.sprite.x > 50 && this.sprite.x < 215) {
            if (this.once) {
                this.sprite.visible = false;
                setTimeout(function () {
                    self.sprite.visible = true;
                }, 1000);
            }
        }

        // Window 2

        if (this.input.mousePointer.x > 280 && this.input.mousePointer.x < 385 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (this.sprite.x > 280 && this.sprite.x < 385) {
                if (!this.once2) {
                    this.window2.play('window6Animation');
                    const man = this.sound.add("man", { loop: false });
                    man.play();
                    this.once2 = true;
                    this.sprite.visible = false;
                    setTimeout(function () {
                        self.sprite.visible = true;
                    }, 6000);
                    this.amount++;
                }

            }
        }
        if (this.sprite.x > 250 && this.sprite.x < 415) {
            if (this.once2) {
                this.sprite.visible = false;
                setTimeout(function () {
                    self.sprite.visible = true;
                }, 1000);
            }
        }

        // Window 3

        if (this.input.mousePointer.x > 477 && this.input.mousePointer.x < 582 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (this.sprite.x > 477 && this.sprite.x < 582) {
                if (!this.once3) {
                    this.window3.play('window3Animation');
                    const spider = this.sound.add("spider", { loop: false });
                    spider.play();
                    this.once3 = true;
                    this.sprite.visible = false;
                    setTimeout(function () {
                        self.sprite.visible = true;
                    }, 5000);
                    this.amount++;
                }

            }
        }
        if (this.sprite.x > 447 && this.sprite.x < 612) {
            if (this.once3) {
                this.sprite.visible = false;
                setTimeout(function () {
                    self.sprite.visible = true;
                }, 1000);
            }
        }

        // Window 4

        if (this.input.mousePointer.x > 700 && this.input.mousePointer.x < 805 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (this.sprite.x > 700 && this.sprite.x < 805) {
                if (!this.once4) {
                    this.window4.play('window6Animation');
                    const man = this.sound.add("man", { loop: false });
                    man.play();
                    this.once4 = true;
                    this.sprite.visible = false;
                    setTimeout(function () {
                        self.sprite.visible = true;
                    }, 6000);
                    this.amount++;
                }

            }
        }
        if (this.sprite.x > 670 && this.sprite.x < 835) {
            if (this.once4) {
                this.sprite.visible = false;
                setTimeout(function () {
                    self.sprite.visible = true;
                }, 1000);
            }
        }

        // Window 5

        if (this.input.mousePointer.x > 1120 && this.input.mousePointer.x < 1225 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (this.sprite.x > 1120 && this.sprite.x < 1225) {
                if (!this.once5) {
                    this.window5.play('window5Animation');
                    const ghost = this.sound.add("ghost", { loop: false });
                    ghost.play();
                    this.once5 = true;
                    this.sprite.visible = false;
                    setTimeout(function () {
                        self.sprite.visible = true;
                    }, 6000);
                    this.amount++;
                }

            }
        }
        if (this.sprite.x > 1090 && this.sprite.x < 1255) {
            if (this.once5) {
                this.sprite.visible = false;
                setTimeout(function () {
                    self.sprite.visible = true;
                }, 1000);
            }
        }

        // Window 6

        if (this.input.mousePointer.x > 1335 && this.input.mousePointer.x < 1440 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (this.sprite.x > 1335 && this.sprite.x < 1440) {
                if (!this.once6) {
                    this.window6.play('window6Animation');
                    const man = this.sound.add("man", { loop: false });
                    man.play();
                    this.once6 = true;
                    this.sprite.visible = false;
                    setTimeout(function () {
                        self.sprite.visible = true;
                    }, 6000);
                    this.amount++;
                }

            }
        }
        if (this.sprite.x > 1305 && this.sprite.x < 1470) {
            if (this.once6) {
                this.sprite.visible = false;
                setTimeout(function () {
                    self.sprite.visible = true;
                }, 1000);
            }
        }

        // Window 7

        if (this.input.mousePointer.x > 1535 && this.input.mousePointer.x < 1640 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (this.sprite.x > 1535 && this.sprite.x < 1640) {
                if (!this.once7) {
                    this.window7.play('window2Animation');
                    const bat = this.sound.add("bat", { loop: false });
                    bat.play();
                    this.once7 = true;
                    this.sprite.visible = false;
                    setTimeout(function () {
                        self.sprite.visible = true;
                    }, 3000);
                    this.amount++;
                }

            }
        }
        if (this.sprite.x > 1505 && this.sprite.x < 1670) {
            if (this.once7) {
                this.sprite.visible = false;
                setTimeout(function () {
                    self.sprite.visible = true;
                }, 1000);
            }
        }

        // Window 8

        if (this.input.mousePointer.x > 1738 && this.input.mousePointer.x < 1843 &&
            this.input.mousePointer.y > 750 && this.input.mousePointer.y < 960) {
            if (this.sprite.x > 1738 && this.sprite.x < 1843) {
                if (!this.once8) {
                    this.window8.play('window4Animation');
                    const witch = this.sound.add("witch", { loop: false });
                    witch.play();
                    this.once8 = true;
                    this.sprite.visible = false;
                    setTimeout(function () {
                        self.sprite.visible = true;
                    }, 6000);
                    this.amount++;
                }

            }
        }
        if (this.sprite.x > 1708 && this.sprite.x < 1873) {
            if (this.once8) {
                this.sprite.visible = false;
                setTimeout(function () {
                    self.sprite.visible = true;
                }, 1000);
            }
        }

        // changes colors on scroll --- maybe handy --- maybe not
        // this.input.on('wheel', function (color) {
        //     let r = Math.floor(Math.random() * 4);
        //     let g = Math.floor(Math.random() * 4);
        //     let b = Math.floor(Math.random() * 4);
        //     this.light.color._rgb[0] = r;
        //     this.light.color._rgb[1] = g;
        //     this.light.color._rgb[2] = b;
        // });

        if (this.amount == 8) {
            if (!this.onceOutro) {
                this.onceOutro = true;
                setTimeout(function () {
                    self.game.scene.stop('Game');
                    self.game.scene.start('Outro');
                    self.amount = 0;
                }, 7000);
            }
        }
    }

    shutdown() {
        console.log('Game shutdown');
    }
}

export default Game;