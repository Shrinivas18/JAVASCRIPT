var hot=false;
var temp=60;

if (true) {
  console.log("I ran")
}

if(temp>80){
  console.log("wohoo")
}
if(temp>80){
  hot=true
}

console.log(hot);

if(hot===false){
  temp=temp+20;
}
console.log(temp)

if (temp===74){
  hot=true;
}
else if(temp===80){
  hot=false;
  temp=temp+20;
}
else{
  hot=true;
}
console.log(hot);
console.log(temp);

alert(hot+ " "+ temp)
