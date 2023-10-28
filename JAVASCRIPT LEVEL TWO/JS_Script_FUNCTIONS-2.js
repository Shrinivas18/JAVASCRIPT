var x="GLOBAL X"
var y="GLOBAL Y"

function fun(y)
{
  console.log(x);
  y="hellooo";
  console.log(y);
}

fun();
console.log(y);
