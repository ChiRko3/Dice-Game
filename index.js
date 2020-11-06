var rvar1=Math.random();
rvar1=(rvar1*6);
rvar1=Math.floor(rvar1)+1;
console.log(rvar1);
var rvar2=Math.random();
rvar2=(rvar2*6);
rvar2=Math.floor(rvar2)+1;
console.log(rvar2);
var d1=document.firstElementChild.lastElementChild.querySelector(".diceimg1");
var d2=document.firstElementChild.lastElementChild.querySelector(".diceimg2");
if(rvar1===1)
{
  d1.setAttribute("src","images/dice1.png");
}
else if (rvar1===2) {
  d1.setAttribute("src","images/dice2.png");
}
else if (rvar1===3) {
  d1.setAttribute("src","images/dice3.png");
}
else if (rvar1===4) {
  d1.setAttribute("src","images/dice4.png");
}
else if (rvar1===5) {
  d1.setAttribute("src","images/dice5.png");
}
else if (rvar1===6){
  d1.setAttribute("src","images/dice6.png");
}
if(rvar2===1)
{
  d2.setAttribute("src","images/dice1.png");
}
else if (rvar2===2) {
  d2.setAttribute("src","images/dice2.png");
}
else if (rvar2===3) {
  d2.setAttribute("src","images/dice3.png");
}
else if (rvar2===4) {
  d2.setAttribute("src","images/dice4.png");
}
else if (rvar2===5) {
  d2.setAttribute("src","images/dice5.png");
}
else if(rvar2===6){
  d2.setAttribute("src","images/dice6.png");
}
var h=document.querySelector("h1");
if(rvar1===rvar2)
{
  h.textContent="Its A Draw ✊";
}
else if(rvar1>rvar2)
{
  h.textContent="🏁 Player 1 Wins"
}
else {
  h.textContent="Player 2 Wins 🏁"
}
