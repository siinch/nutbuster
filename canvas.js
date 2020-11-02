class Canvas {

  constructor () {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 200;
    this.canvas.height = 100;
    this.canvas.style.border = "1px solid black";
    this.canvas = document.body.appendChild(this.canvas);
  }

}
