var carinfo={make:"toyota",year:1990,model:"camry"}

var new1={a:"hello", b:[1,2,3], c:{inside:['a','b']}}


carinfo['year']=2006
carinfo['year']+=1

// gives all the key value pair, dosen't hides it
console.dir(new1)

//It hides when number of value incresed.
// console.log(carinfo)

for(k in carinfo)
{
  console.log(k);
}

//Object Method
var carinfo1={
  make:"toyota",
  year:1990,
  model:"camry",
  carAlert:function(){
    alert("We've got a car here!");
    return this.make;
  }
};

console.log(carinfo1.carAlert());

var property={
  area:2400,
  name:"Amityville",
  loc: "USA",
  openforsell:function(){
    alert("Amityville is open for sale")
    return "Its areas is "+this.area+" and is situated in "+this.loc;
  }
}
