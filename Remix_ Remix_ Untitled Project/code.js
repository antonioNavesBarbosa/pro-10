var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player= createSprite(200,325,15,15);
player.shapeColor="black";
var parede1= createSprite(5,40,10,200);//
parede1.shapeColor= "yellow";
var parede2=createSprite(5,359,10,200);
parede2.shapeColor="yellow";
var parede2= createSprite(100,395,600,10);
parede2.shapeColor= "yellow";
var parede3= createSprite(395,40,10,200);//
parede3.shapeColor= "yellow";
var parede4=createSprite(395,359,10,200);
parede4.shapeColor= "yellow";
var parede4= createSprite(100,5,600,10);
parede4.shapeColor= "yellow";
var parede5= createSprite(75,133,130,15);
parede5.shapeColor= "yellow";
var parede6= createSprite(325,133,130,15);
parede6.shapeColor= "yellow";
var parede7= createSprite(325,266,130,15);
parede7.shapeColor= "yellow";
var parede8= createSprite(75,266,130,15);
parede8.shapeColor= "yellow";

var car1=createSprite(48,160,10,10);
car1.shapeColor="red";
var car2=createSprite(48,200,10,10);
car2.shapeColor="red";
var car3=createSprite(48,240,10,10);
car3.shapeColor="red";
var car4=createSprite(360,160,10,10);
car4.shapeColor="red";
var car5=createSprite(360,200,10,10);
car5.shapeColor="red";
var car6=createSprite(360,240,10,10);
car6.shapeColor="red";



 car1.velocityX=8;
 car2.velocityX=7;
 car3.velocityX=6;
 car4.velocityX=-6;
 car5.velocityX=-7;
 car6.velocityX=-8;

function draw() {
  background('green');
  
 createEdgeSprites();
  
  drawSprites();
  
 if (keyDown('up')){
  player.y = player.y-3;
 }
  
   
   car1.bounceOff(edges);
   car2.bounceOff(edges);
   car3.bounceOff(edges);
   car4.bounceOff(edges);
   car5.bounceOff(edges);
   car6.bounceOff(edges);
   


if (player.isTouching(car1)|| player.isTouching(car2)|| player.isTouching(car3)|| player.isTouching(car4)|| player.isTouching(car5)|| player.isTouching(car6)){
  player.x=200;
  player.y=325;
}











}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
