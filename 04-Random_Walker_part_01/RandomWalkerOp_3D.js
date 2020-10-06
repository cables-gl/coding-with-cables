const resetButton = op.inTriggerButton("Reset");
const inDirection = op.inInt("direction 0-2",0);
const inMultiplier = op.inFloat("Multiplier",1);
const inBoundary = op.inFloat("Boundary",4.0);
const outXPos = op.outNumber("X position");
const outYPos = op.outNumber("Y position");
const outZPos = op.outNumber("Z position");

inDirection.onChange=inMultiplier.onChange=update;
resetButton.onTriggered = reset;

var x = 0;
var y = 0;
var z = 0;

var xDir = 1;
var yDir = 1;
var zDir = 1;

function update()
{
    var dir = Math.floor(inDirection.get() % 3);

    var bounds = inBoundary.get();
    var mult = inMultiplier.get();

    if(dir === 0)
    {
        x = x + (xDir * mult);
    }
    else if(dir === 1)
    {
        y = y + (yDir * mult);
    }
    else if(dir === 2)
    {
        z = z + (zDir * mult);
    }


    if(x <= -bounds)
    {
        xDir = 1;
    }
    else if(x >= bounds)
    {
        xDir = -1;
    }
    if(y <= -bounds)
    {
        yDir = 1;
    }
    else if(y >= bounds)
    {
        yDir = -1;
    }
    if(z <= -bounds)
    {
        zDir = 1;
    }
    else if(z >= bounds)
    {
        zDir = -1;
    }

    outXPos.set(x);
    outYPos.set(y);
    outZPos.set(z);
}

function reset()
{
    x = 0;
    y = 0;
    z = 0;

    xDir = 1;
    yDir = 1;
    zDir = 1;
}
