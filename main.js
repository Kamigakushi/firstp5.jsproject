function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(450,200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,640,480);
    fill("#22b53b");
    stroke("#22b53b");
    circle(40,40,80);
    circle(120,40,80);
    circle(200,40,80);
    circle(280,40,80);
    circle(360,40,80);
    circle(440,40,80);
    circle(520,40,80);
    circle(600,40,80);

    circle(40,440,80);
    circle(120,440,80);
    circle(200,440,80);
    circle(280,440,80);
    circle(360,440,80);
    circle(440,440,80);
    circle(520,440,80);
    circle(600,440,80);

    circle(40,120,80);
    circle(40,200,80);
    circle(40,280,80);
    circle(40,360,80);

    circle(600,120,80);
    circle(600,200,80);
    circle(600,280,80);
    circle(600,360,80);
}
function take_snapshot()
{
    save("filterimg.png");
}