alert("Let's collect some basic information ")

var fname=prompt("Enter your first name: ");
var lname=prompt("Enter your last name: ");
var age=parseInt(prompt("Enter your age: "));
var height=parseInt(prompt("Enter your height in cm: "));
var pname=prompt("Enter your pet name: ");

alert("Thankyou so much for the information!");

var nameCond = null;
var heightCond = null;
var ageCond = null;
var pnameCond = null;


if(fname[0] === lname[0])
{
  nameCond=true;
}
else {
  nameCond=false;
}

if(height>=170)
{
  heightCond=true;
}
else{
  heightCond=false;
}

if(age>20 && age<30)
{
  ageCond=true;
}
else{
  ageCond=false;
}

var v=pname.length
if(pname[v-1]==='y')
{
  pnameCond=true;
}
else {
  pnameCond=false;
}

if(nameCond && heightCond && ageCond && pnameCond)
{
  console.log("Welcome spy")
}
else {
  console.log("Sorry! you can't be a spy")
}
