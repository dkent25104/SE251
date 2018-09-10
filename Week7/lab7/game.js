var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var menu = document.querySelector("#menu");
var start = document.querySelector("#start");
var quit = document.querySelector("#quit");
var count = document.querySelector("#count");
var random = document.querySelector("#random");

var balls = [];

var currentState = "off";
quit.disabled = true;

start.addEventListener("click", startGame);
quit.addEventListener("click", quitGame);

function startGame(e)
{
    if (count.value > 0)
	{
		currentState = "on";
		start.disabled = true;
		count.disabled = true;
		random.disabled = true;
		quit.disabled = false;
		
		balls = [];
		for (var i = 0; i<count.value; i++)
		{
			balls[i] = new GameObject;
			if (random.value === "random")
			{
				balls[i].color = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
			}
			else
			{
				balls[i].color = random.value;
			}
		}
	}
}
function quitGame(e)
{
    currentState = "off";
    start.disabled = false;
	count.disabled = false;
	random.disabled = false;
    quit.disabled = true;
	
	balls = [];
}

var timer = setInterval(main, 1000/60);

var states = [];
states["off"] = function()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
states["on"] = function()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for (var x = 0; x<balls.length; x++)
    {
        balls[x].drawEllipse();
        balls[x].move();

        if (balls[x].y+balls[x].r > canvas.height)
        {
            balls[x].vy = -balls[x].vy;
			if (random.value === "red")
			{
				balls[x].color = "rgb(" + Math.floor(Math.random()*200+50) + ",0,0)";
			}
			else if (random.value === "green")
			{
				balls[x].color = "rgb(0," + Math.floor(Math.random()*200+50) + ",0)";
			}
			else if (random.value === "blue")
			{
				balls[x].color = "rgb(0,0," + Math.floor(Math.random()*200+50) + ")";
			}
			else if (random.value === "random")
			{
				balls[x].color = "rgb(" + Math.floor(Math.random()*200+50) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
			}
        }
        if (balls[x].y-balls[x].r < 0)
        {
            balls[x].vy = -balls[x].vy;
			if (random.value === "red")
			{
				balls[x].color = "rgb(" + Math.floor(Math.random()*200+50) + ",0,0)";
			}
			else if (random.value === "green")
			{
				balls[x].color = "rgb(0," + Math.floor(Math.random()*200+50) + ",0)";
			}
			else if (random.value === "blue")
			{
				balls[x].color = "rgb(0,0," + Math.floor(Math.random()*200+50) + ")";
			}
			else if (random.value === "random")
			{
				balls[x].color = "rgb(" + Math.floor(Math.random()*200+50) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
			}
        }
        if (balls[x].x+balls[x].r > canvas.width)
        {
            balls[x].vx = -balls[x].vx;
			if (random.value === "red")
			{
				balls[x].color = "rgb(" + Math.floor(Math.random()*200+50) + ",0,0)";
			}
			else if (random.value === "green")
			{
				balls[x].color = "rgb(0," + Math.floor(Math.random()*200+50) + ",0)";
			}
			else if (random.value === "blue")
			{
				balls[x].color = "rgb(0,0," + Math.floor(Math.random()*200+50) + ")";
			}
			else if (random.value === "random")
			{
				balls[x].color = "rgb(" + Math.floor(Math.random()*200+50) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
			}
        }
        if (balls[x].x-balls[x].r < 0)
        {
            balls[x].vx = -balls[x].vx;
			if (random.value === "red")
			{
				balls[x].color = "rgb(" + Math.floor(Math.random()*200+50) + ",0,0)";
			}
			else if (random.value === "green")
			{
				balls[x].color = "rgb(0," + Math.floor(Math.random()*200+50) + ",0)";
			}
			else if (random.value === "blue")
			{
				balls[x].color = "rgb(0,0," + Math.floor(Math.random()*200+50) + ")";
			}
			else if (random.value === "random")
			{
				balls[x].color = "rgb(" + Math.floor(Math.random()*200+50) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
			}
        }
    } 
}

function main()
{
    states[currentState](); 
}