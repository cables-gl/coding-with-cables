const resetButton = op.inTriggerButton("Reset");
const inDirection = op.inInt("direction 1-4",0);
const inMultiplier = op.inFloat("Multiplier",1);
const inBoundary = op.inFloat("Boundary",8.0);

const outXPos = op.outNumber("X position");
const outYPos = op.outNumber("Y position");
const outZPos = op.outNumber("Z position");

inDirection.onChange=inMultiplier.onChange=update;
resetButton.onTriggered = reset;

var x = 0;
var y = 0;
var z = 0;

function update()
{
    // NESW
    var dir = Math.floor(inDirection.get() % 4) ;
    //console.log("dir is "  + dir);
    var bounds = inBoundary.get();
    var mult = inMultiplier.get();
    //north
    if(dir === 0)
    {
        y += 1*mult;
    }
    //east
    else if(dir === 1)
    {
        x += 1*mult;
    }
    //south
    else if(dir === 2)
    {
        y -= 1*mult;
    }
    //west
    else if(dir === 3)
    {
        x -= 1*mult;
    }
    //define bounding box so walker stays on screen
    if(x <= -bounds)
    {
        x = bounds;
    }
    else if(x >= bounds)
    {
        x = -bounds;
    }

    if(y <= -bounds)
    {
        y = bounds;
    }
    else if(y >= bounds)
    {
        y = -bounds;
    }
    //set position out
    outXPos.set(x);
    outYPos.set(y);
    outZPos.set(z);
}
//resets xyz ato 0
function reset()
{
    x = 0;
    y = 0;
    z = 0;
}