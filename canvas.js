console.log("Hello from canvas!")
class Canvas {

  static canvas = document.createElement("canvas");

  constructor () {
    Canvas.canvas.width = 800;
    Canvas.canvas.height = 400;
    Canvas.canvas.style.border = "5px solid gray";
    Canvas.canvas = document.body.appendChild(Canvas.canvas);
  }

  static fill(color) {
    let context = Canvas.canvas.getContext("2d");
    context.beginPath();
    context.rect(
      0, 0,
      Canvas.canvas.width,
      Canvas.canvas.height);
    context.fillStyle = color;
    context.fill();
  }

}

new Canvas();
