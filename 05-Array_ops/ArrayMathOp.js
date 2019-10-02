//create input ports and intialize them
const mathModeSelect = op.inSwitch("math mode",['+','-'],'+');
const arrayIn_1 = op.inArray("Array in 1");
const arrayIn_2 = op.inArray("Array in 2");
const arrayOut = op.outArray("Array out");

//create an empty array
const mathArray = [];

//if the contents of either array changes or the mathModeSelect then 
//run this function
arrayIn_1.onChange=arrayIn_2.onChange=mathModeSelect.onChange=
function()
{
    //Create two variables and assgn the arrays to them
    var arr1 = arrayIn_1.get();
    var arr2 = arrayIn_2.get();

    //get the currently selected math mode
    var mathMode = mathModeSelect.get();

    //reset mathArray
    mathArray.length=0;
    
    //check for both arrays, if not present set array out to null and return
    if(!arr1 || !arr2)
    {
        arrayOut.set(null);
        return;
    }

    //if both arrays do not have the same length set array out to null and return
    if(arr1.length != arr2.length)
    {
        arrayOut.set(null);
        return;
    }

    //set math array length to length of array 1
    mathArray.length = arr1.length;

    //checks the currently selected math mode and executes the current one
    if(mathMode === "+")
    {
        //loop through contents of both arrays and perform math function
        for (var i = 0; i < arr1.length; i++)
        {
            mathArray[i] = arr1[i] + arr2[i];
        }
    }
    else if(mathMode === "-")
    {
        //loop through contents of both arrays and perform math function
        for (var i = 0; i < arr1.length; i++)
        {
            mathArray[i] = arr1[i] - arr2[i];
        }
    }
    //set the array out with the new mathArray
    arrayOut.set(mathArray);
};