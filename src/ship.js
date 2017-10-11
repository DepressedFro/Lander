export default class Ship
{
  constructor(screenWidth, screenHeight)
  {
    this.x = screenwidth / 2;
    this.y = 10;
    this.angle = 0;
  }

  render(ctx)
  {
    ctx.save();
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.rotate(this.angle);
    ctx.moveTo(this.x, this.y + 5);
    ctx.lineTo(this.x + 2, this.y - 5);
    ctx.lineTo(this.x -= 2, this.y - 5);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}
