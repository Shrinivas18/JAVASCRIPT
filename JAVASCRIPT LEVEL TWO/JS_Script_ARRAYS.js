var arr=[1,2,3,'bye',[4,[5,[6]]]]
// console.log(arr.pop());
console.log(arr.flat(Infinity))
console.log(arr.indexOf('bye'));
console.log(arr.lastIndexOf(4))
console.log(arr.push(7));
console.log(arr.sort());
console.log(arr.pop());


//Using for/of loop in ARRAYS

for(x of arr)
{
  console.log(x);
}

//using forEach
arr.forEach(alert);

function addAwesome(name)
{
  console.log(name+" is Awesome!");
}

var topics=['Django','Python','Science']
topics.forEach(addAwesome)
