console.log("Hello from main!")
let nut = new Nut({x: 100, y: 100}, 50, "black");
let speed = 2.5;
function gameloop () {
  Canvas.fill("white");
  nut.draw();
  nut.position.x += speed;
  if(nut.position.x - nut.radius < 0 || nut.position.x + nut.radius > 800)
  speed *= -1;
}
setInterval(gameloop, 16);
