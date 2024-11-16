function getResult(val)
{
document.getElementById("result").value+=val;
}

function getFinalResult()
{
// get final result eval() => all airthmatic operators evaluate here
var x=document.getElementById("result").value;
var y=eval(x);
document.getElementById("result").value=+y;
}