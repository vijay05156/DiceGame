function RollDice()
{
  var roll1 = (Math.random()*6)+1;
  var roll2 = (Math.random()*6)+1;
  var value1= Math.floor(roll1);
  var value2= Math.floor(roll2);
  if(value1>value2)
  {
    document.querySelector("h2").innerHTML="Winner is player one";
  }
  else if(value1==value2)
  {
      document.querySelector("h2").innerHTML="Draw";
  }
  else
  {
      document.querySelector("h2").innerHTML="Winner is player two";
  }
  if(value1==1)
    {
      document.querySelector("#dice1").setAttribute("src","Images/dice1.png");
    }
    if(value1==2)
      {
        document.querySelector("#dice1").setAttribute("src","Images/dice2.png");
      }
      if(value1==3)
        {
          document.querySelector("#dice1").setAttribute("src","Images/dice3.png");
        }
        if(value1==4)
          {
            document.querySelector("#dice1").setAttribute("src","Images/dice4.png");
          }
          if(value1==5)
            {
              document.querySelector("#dice1").setAttribute("src","Images/dice5.png");
            }
            if(value1==6)
              {
                document.querySelector("#dice1").setAttribute("src","Images/dice6.png");
              }

              if(value2==1)
                {
                  document.querySelector("#dice2").setAttribute("src","Images/dice1.png");
                }
                if(value2==2)
                  {
                    document.querySelector("#dice2").setAttribute("src","Images/dice2.png");
                  }
                  if(value2==3)
                    {
                      document.querySelector("#dice2").setAttribute("src","Images/dice3.png");
                    }
                    if(value2==4)
                      {
                        document.querySelector("#dice2").setAttribute("src","Images/dice4.png");
                      }
                      if(value2==5)
                        {
                          document.querySelector("#dice2").setAttribute("src","Images/dice5.png");
                        }
                        if(value2==6)
                          {
                            document.querySelector("#dice2").setAttribute("src","Images/dice6.png");
                          }
}
