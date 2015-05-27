
var gameCanvas = document.getElementById('game-canvas');
var renderer = PIXI.autoDetectRenderer(800, 600, { 
  backgroundColor: 0x1099bb,
  view: gameCanvas 
});

// create the root of the scene graph
var stage = new PIXI.Container();

var hero = createSprite();

stage.addChild(hero);
stage.addChild(createText('Wombat life'));

var graphics = new PIXI.Graphics();
// draw a circle, set the lineStyle to zero so the circle doesn't have an outline
graphics.lineStyle(0);
graphics.beginFill(0xFFFF0B, 0.5);
graphics.drawCircle(250, 200,20);
graphics.endFill();
stage.addChild(graphics);

// start animating
animate();
function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    hero.rotation += 0.1;

    // render the container
    renderer.render(stage);
}


function createSprite() {
  // create a texture from an image path
  var texture = PIXI.Texture.fromImage('assets/bunny.png');

  // create a new Sprite using the texture
  var bunny = new PIXI.Sprite(texture);

  // center the sprite's anchor point
  bunny.anchor.x = 0.5;
  bunny.anchor.y = 0.5;

  // move the sprite to the center of the screen
  bunny.position.x = 200;
  bunny.position.y = 150;

  bunny.interactive = true;
  bunny.on('mousedown', onDown);
  bunny.on('touchstart', onDown);

  function onDown(eventData) {
    bunny.scale.x += 0.3;
    bunny.scale.y += 0.3;
  }

  return bunny;
}

function createText(txt) {
  var style = {
    font : '36px Arial bold italic',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 5,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6,
    wordWrap : true,
    wordWrapWidth : 440
  };

  var richText = new PIXI.Text(txt, style);
  richText.x = 30;
  richText.y = 180;

  return richText;
}