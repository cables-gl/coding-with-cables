const inTrigger = op.inTrigger("trigger in");
const inTriggerButton = op.inTriggerButton("reset counter");

const outTrigger = op.outTrigger("trigger out");
const currentCount = op.outNumber("current count");
inTrigger.onTriggered = update;

var counter = 0;

inTriggerButton.onTriggered = function()
{
    counter =0;
}
function update ()
{
    counter +=1;
    currentCount.set(counter);
    outTrigger.trigger();
}