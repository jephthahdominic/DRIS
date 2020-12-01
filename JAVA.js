
var btn = document.getElementById("norm");
var close = document.getElementById("close");
var body = document.getElementById('drop');
var dropdown = document.getElementById("downers");
var drpdown = document.getElementById('dropdown')
var fest = document.getElementById('fest');
var sec = document.getElementById('sec');
var firstBlur = document.getElementById('firstBlur');
var carImg = document.getElementsByClassName('carImg');
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
var closers = document.getElementById('closers');
var thecloser = document.getElementById('thecloser');
var no = document.getElementById('no');
var yes = document.getElementById('yes');

function greetUser(){
  var time = new Date().getHours();
  if (time < 11) {
    return "Good Morning  Esteemed Guest";
  } else if (time < 18) {
    return "Good Afternoon Esteemed Guest";
  } else {
    return "Good Evening  Esteemed Guest";
  }
}

document.getElementById('greet').innerHTML = greetUser();

function loadFunction(){
  greeters.style.transition = 'all 1s linear .5s';
  greeters.style.visibility = 'visible';
  greeters.style.background = 'rgba(0,0,0,0.3)'
  thegreeter.style.transition = 'margin 1.5s linear';
  thegreeter.style.marginTop = '0px';
};

function ex(){
  greeters.style.transition = 'all .6s ease-in-out .6s';
  greeters.style.visibility = 'hidden';
  greeters.style.background = 'rgba(0,0,0,0.0)'
  thegreeter.style.transition = 'margin 1.2s linear';
  thegreeter.style.marginTop = '-130px';
};

btins.addEventListener("click", function(){
  header.style.transition = "margin 1.2s";
  header.style.marginTop = "-110px";
  main.style.transition = "margin 1.2s";
  main.style.marginTop = "0px";
  btins.style.transition = "opacity 2s";
  btins.style.opacity = "0.5";
  btins2.style.transition = "opacity 2s";
  btins2.style.opacity = "1.0";
  carImg[0].style.height = "450px";
  carImg[0].style.transition = "margin 1.2s";
  carImg[1].style.height = "450px";
  carImg[1].style.transition = "margin 1.2s";
  carImg[2].style.height = "450px";
  carImg[2].style.transition = "margin 1.2s";
})

btins2.addEventListener("click", function(){
  header.style.transition = "margin 1.2s";
  header.style.marginTop = "-50px";
  main.style.transition = "margin 1.2s";
  main.style.marginTop = "50px";
  btins2.style.transition = "opacity 2s";
  btins2.style.opacity = "0.5";
  btins.style.transition = "opacity 2s";
  btins.style.opacity = "1.0";
});

var log = document.getElementById('logout');
log.addEventListener("click", function(){
  closers.style.transition = 'all 1s linear .5s';
  closers.style.visibility = "visible";
  closers.style.background = 'rgba(0,0,0,0.3)'
  thecloser.style.transition = 'margin 1.5s linear';
  thecloser.style.marginTop = '5px';
});

no.addEventListener("click", function(){
  closers.style.transition = 'all .6s linear .6s';
  closers.style.visibility = "hidden";
  closers.style.background = 'rgba(0,0,0,0.0)'
  thecloser.style.transition = 'margin 1.2s linear';
  thecloser.style.marginTop = '-130px';
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





/*
var greetTimeout = setTimeout(function(){
  greeters.style.transition = 'visibility 2.3s ease-in-out';
  greeters.style.visibility = 'hidden';
  thegreeter.style.transition = 'margin 1s linear';
  thegreeter.style.marginTop = '-130px';
}, 4000);
*/
//document.getElementById("fest").style.display="none";

























$('body').scrollspy({target:".navbar", offset:50});

$("#myNavbar a").on('click', function(event){
  if(this.hash !=="") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop:$(hash).offset().top
    },800,function(){
      window.location.hash = hash;
    });
  } //End if
});


var blur = document.getElementById('blur');
var confirm = document.getElementById('confirm');
var message = document.getElementById('message');
var bton = document.getElementById('yes');


var myTimeout = setTimeout(function(){
  document.getElementsByClassName('modal').style.display = "block";
}, 500);

bton.addEventListener("click", function(){
  blur.style.display = "none";
})
