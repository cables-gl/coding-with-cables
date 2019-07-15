const inEditor = op.inStringEditor("string editor","");
const inStr = op.inString("string in","");

const outStr = op.outString("string out");

inStr.onChange = update;
function update()
{
    outStr.set( inEditor.get() +  inStr.get());
}