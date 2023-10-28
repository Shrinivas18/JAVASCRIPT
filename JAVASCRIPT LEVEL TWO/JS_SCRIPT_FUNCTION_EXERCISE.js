// Solution to question done
alert("All function are defined.")
alert("Checkout questions and attached functions.")
alert("Just enter proper parameters of the functions in console. ")

// PROBLEM 1: sleepIn
function sleepIn(weekday,vacation)
{
  if(weekday)
  {
    return false;
  }
  else if (!weekday && vacation)
  {
    return true;
  }
  else {
    return true;
  }
}

//PROBLEM 2: monkeyTrouble
function monkeyTrouble(aSmile,bSmile)
{
  if((aSmile && bSmile) ||(!aSmile && !bSmile))
  {
    return true;
  }
  else
  {
    return false;
  }
}

//PROBLEM 3: stringTimes
function stringTimes(str,n)
{
  var str1="";
  while(n>0)
  {
    str1=str1+str;
    n--;
  }
  return str1
}

//PROBLEM 4: luckySum
function LuckySum(a,b,c)
{
  if(a!=13 && b!=13 && c!=13)
  {
    return a+b+c;
  }
  else if(a===13)
  {
    return null;
  }
  else if(b===13)
  {
    return a;
  }
  else if(c===13)
  {
    return a+b;
  }
}

//PROBLEM 5: caught_speeding
function caught_speeding(speed,is_birthday)
{
  if(is_birthday)
  {
    if(speed<=65)
    {
      return 0;
    }
    else if(speed>=66 && speed<=85)
    {
      return 1;
    }
    else if(speed>85)
    {
      return 2;
    }
  }
  else
  {
    if(speed<=60)
    {
      return 0;
    }
    else if(speed>=61 && speed<=80)
    {
      return 1;
    }
    else if(speed>81)
    {
      return 2;
    }
  }
}

//PROBLEM 6(BONUS): makeBricks
function makeBricks(small,big,goal)
{
  s=1;
  b=5;

  if(small*s===goal || big*b===goal)
  {
    return true;
  }
  else if(small*s + big*b ===goal)
  {
    return true;
  }
  else
  {
    return false;
  }

}
