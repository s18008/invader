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
    init: function(){
        this.superInit({
            width:SCREEN_WIDTH,
            height:SCREEN_HEIGHT,
        });
        this.gridX = Grid(SCREEN_WIDTH,40);
        this.gridY = Grid(SCREEN_HEIGHT,40);

        this.backgroundColor = 'black';

        const player = Sprite('toma',64,64).addChildTo(this);
        player.setFrameIndex(10,64,64)
        player.x = this.gridX.center();
        player.y = this.gridY.span(38);
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