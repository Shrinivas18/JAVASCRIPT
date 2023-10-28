function AddStudent(roster)
{
  var name=prompt("Enter the name of the student : ");
  roster.push(name);
}

function RemoveStudent(roster)
{
  var r=prompt("Which student you want to get removed? ")
  console.log("Removed name : "+r)
  var x=roster.indexOf(r)
  roster.splice(x,1);

}

function Display(roster)
{
  console.log(roster);
}

function Quit()
{
  permission='no';

}
var roster=[]
permission='yes';
while(permission==='yes')
{
  var permission=prompt("Do you want to use the web app ?");
  if(permission==='no')
  {
    break;
  }
  else {
    alert("Select a number from the task associated with the given list :");
    var choice=parseInt(prompt("1. ADD Student \n 2. REMOVE Student \n 3. Display Roster \n 4. Quit"));

    if(choice===1)
    {
      AddStudent(roster);
    }
    else if (choice===2)
    {
      RemoveStudent(roster);
    }
    else if(choice===3)
    {
      Display(roster);
    }
    else if(choice===4)
    {
      Quit();
    }
}
}
