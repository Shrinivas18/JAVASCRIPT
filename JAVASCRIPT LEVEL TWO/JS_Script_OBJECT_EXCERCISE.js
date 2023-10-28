var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength:function(){
    return (this.name).length;
  },
  createAlert:function(){
    alert("Name of the employee is "+this.name)
    alert("Job of the employee is "+this.job)
    alert("Age of the employee is "+this.age)
  },
  lastName:function(){
    var x=this.name.split(" ");
    return x[1];
  }
}

console.log(employee.nameLength());
console.log(employee.createAlert());
console.log(employee.lastName())
