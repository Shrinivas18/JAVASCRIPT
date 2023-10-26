alert("Welcome to Multiplication Table Calculator.")
var x=parseInt(prompt("Which number's table do you want :"));
console.log("Here is the Multiplication Table of "+x)
for(var i=1;i<11;i++)
{
  console.log(x+" * "+ i + " = "+ x*i);
}

alert("Lets try to print a pattern")
for(var i=0;i<5;i++)
{
  for(var j=0;j<i+1;j++)
  {
    console.log("*")
  }
  console.log("\n")
}
