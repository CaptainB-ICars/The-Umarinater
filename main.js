noseX=0
noseY=0

function preload()
{
umar=loadImage('https://i.postimg.cc/VsXBp939/r.png')
}

function setup()
{
canvas=createCanvas(400,400)
canvas.position(500,175)

video=createCapture(VIDEO)
video.size(400,400)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function draw()
{
image(video,0,0,400,400)
image(umar,noseX,noseY,200,300)
}

function umarinate()
{
save("I Have Been Umarinated!")
}

function modelLoaded()
{
    console.log("With Great Reluctense I Would Like To Announce That Your Model Has L0oaded.")
}


function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        noseX=results[0].pose.nose.x-100
        noseY=results[0].pose.nose.y-150
    }
}

























