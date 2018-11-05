phina.globalize();

const SCREEN_WIDTH = 960;
const SCREEN_HEIGHT = 640;
const ASSETS = {
    "image" : {
        "buro" : "./assets/imags/buropiyo.png",
        "mero" : "./assets/imags/meropiyo.png",
        "mika" : "./assets/imags/mikapiyo.png",
        "nasu" : "./assets/imags/nasupiyo.png",
        "take" : "./assets/imags/takepiyo.png",
        "toma" : "./assets/imags/tomapiyo.png"


    }
};

phina.define('MainScene',{
    superClass: 'DisplayScene',
    init: function() {
        this.superInit({
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
        });
        this.gridX = Grid(SCREEN_WIDTH, 40);
        this.gridY = Grid(SCREEN_HEIGHT, 40);

        this.backgroundColor = 'black';

        const prayer = Player(
            this.gridX.center(), this.gridY.span(37)).addChild(this);
    }
});

phina.define('Player', {
    superClass: 'Sprite',
    init: function (x, y) {
        this.superInit('toma', 64, 64);
        this.setFrameIndex(10, 64, 64);
        this.x = x;
        this.y = y;
        this.SPPED = 5;
    },

    update: function (app) {
        const key = app.keyboard;
        if (key.getKey('left')) {
            this.x -= this.SPEED;
            if (this.left < 0){
                this.left = 0;
            }
        }
        if (key.getKey('right')) {
            this.x += this.SPEED;
            if (this.right > SCREEN_WIDTH){
                this.right = SCREEN_WIDTH;
            }
        }
    }
});

phina.main(() => {
    const app = GameApp({
        title: "インベーダー",
        fps: 60,
        width: SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        assets: ASSETS
    });

    app.run();
});