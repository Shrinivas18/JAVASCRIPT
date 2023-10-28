alert("Calculator");
alert("Go to console an use function calculator(first_number,second_number,operator)");

function calculator(a,b,c)
{
  //using switch case to decrease number of if statments
  switch(c)
  {
    case '+':
    console.log(a+b);
    break;

    case '-':
    console.log(a-b);
    break;

    case '/':
    console.log(a/b);
    break;

    case '*':
    console.log(a*b);
    break;

    case '%':
    console.log(a%b);
    break;

    case '**':
    console.log(a**b);
    break;

    default:
    console.log("Invalid operator")
  }
}

alert("There is one more function name fullname")
alert("Use fullname(\"first_name\",\"last_name\") to get the full name")

function fullname(fname,lname)
{
// We can directly return values using return keyword.
  return fname+" "+lname;
}
