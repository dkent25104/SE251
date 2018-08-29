class GameObject
{
    constructor()
    {
        this.x = Math.floor(Math.random()*600+100);
        this.y = Math.floor(Math.random()*400+100);
        this.r = 50;
        this.vx = Math.round(Math.random()*20-10);
        this.vy = Math.round(Math.random()*20-10);
        this.color = "black";
    }

    drawEllipse()
    {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }

    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}