var btn = document.getElementById("norm");
var close = document.getElementById("close");
var body = document.getElementById('drop');
var dropdown = document.getElementById("downers");
var drpdown = document.getElementById('dropdown')
var fest = document.getElementById('fest');
var sec = document.getElementById('sec');
var firstBlur = document.getElementById('firstBlur');
var header = document.getElementById('header');
var main = document.getElementById('main');
var textFirst = document.getElementById('text');
var textSecond = document.getElementById('text2');
var textThird = document.getElementById('text3');
var btins = document.getElementById('btins');
var btins2 = document.getElementById('btins2');
var glyph = document.getElementById('glyph');
var leave = document.getElementById('leave');
var greeters = document.getElementById('greeters');
var thegreeter = document.getElementById('theGreeter');
var greeting = document.getElementById('greet');
var greetButn = document.getElementById('greetbtn');

function greetUser(){
  var time = new Date().getHours();
  if (time < 11) {
    return "Good Morning Sir/Ma";
  } else if (time < 18) {
    return "Good Afternoon Sir/Ma";
  } else {
    return "Good Evening Sir/Ma";
  }
}

btins.addEventListener("click", function(){
  header.style.transition = "margin 2s 0.5s";
  header.style.marginTop = "-110px";
  main.style.transition = "margin 2s 0.5s";
  main.style.marginTop = "0px";
  btins.style.transition = "opacity 2s";
  btins.style.opacity = "0.5";
  btins2.style.transition = "opacity 2s";
  btins2.style.opacity = "1.0";
})

btins2.addEventListener("click", function(){
  header.style.transition = "margin 2s 0.5s";
  header.style.marginTop = "-50px";
  main.style.transition = "margin 2s 0.5s";
  main.style.marginTop = "50px";
  btins2.style.transition = "opacity 2s";
  btins2.style.opacity = "0.5";
  btins.style.transition = "opacity 2s";
  btins.style.opacity = "1.0";
});




/*btn.addEventListener("click", function() {
  firstBlur.style.transition= "all 1.4s linear";
  firstBlur.style.visibility= "visible";
  firstBlur.style.background = "rgba(0,0,0,0.7)";
  document.getElementById('drop').style.transition= "all 1.5s ease-in-out";
  document.getElementById('drop').style.marginLeft= "0px";
});

body.addEventListener("mouseover", function(){
  document.getElementById('drop').style.marginLeft = "0px";
  firstBlur.style.visibility = "visible";
  firstBlur.style.background = "rgba(0,0,0,0.7)";
});



body.addEventListener("mouseout", function(){
  document.getElementById('drop').style.marginLeft = "-280px";
  document.getElementById('drop').style.transition = "all 1.0s ease-in-out";
  firstBlur.style.transition = "all 1.3s linear";
  firstBlur.style.visibility = "hidden";
  firstBlur.style.background = "rgba(0,0,0,0.0)";
});*/

/*dropdown.addEventListener("mouseover", function(){
  document.getElementById('fest').style.display = "none";
  document.getElementById('sec').style.display = "block";
});
*/

/*sec.addEventListener("click", function(){
  document.getElementById('fest').style.display = "block";
  document.getElementById('sec').style.display = "none";
  document.getElementById("nav").style.visibility = "visible";
  document.getElementById('nav').style.transition = "all 0.1 linear";
});

fest.addEventListener("click", function(){
  document.getElementById('fest').style.display = "none";
  document.getElementById('sec').style.display = "block";
  document.getElementById("nav").style.visibility = "hidden";
  document.getElementById('nav').style.transition = "all 0.1 linear";
});*/
