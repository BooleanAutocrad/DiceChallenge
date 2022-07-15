var randomNumber1=Math.floor(Math.random() * 6) + 1;

var randomNumber1Source="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomNumber1Source);



var randomNumber2=Math.floor(Math.random() * 6) + 1;

var randomNumber2Source="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomNumber2Source);



if(randomNumber1>randomNumber2)
{
    document.querySelector("h2").textContent="Player 1";
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h2").textContent="Player 2";
}
else
{
    document.querySelector("i").style.visibility="hidden";
}

