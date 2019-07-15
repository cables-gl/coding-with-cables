const numIn_0 = op.inFloat("Number 0 ",0.0);
const numIn_1 = op.inFloat("Number 1",0.0);
const mathSelect = op.inDropDown( "Mode select", ["+","-","*","/",] , "+" );
const numOut = op.outNumber("result");

numIn_0.onChange = numIn_1.onChange = mathSelect.onChange = function()
{
    var n0 = numIn_0.get();
    var n1 = numIn_1.get();
    var mode = mathSelect.get();

    if (mode === "+")
    {
        numOut.set(n0+n1);
    }
    else if (mode === "-")
    {
        numOut.set(n0-n1);
    }
    else if (mode === "*")
    {
        numOut.set(n0*n1);
    }
    else if (mode === "/")
    {
        numOut.set(n0/n1);
    }
}