var submit = document.getElementById('submit');
var agee = document.getElementById('age');




//document.getElementById('bad').style.display = "block";



agee.oninput = function() {
  var age = parseInt(document.getElementById('age').value);
  //var fName = document.getElementById('fName').value;
  var oName = parseInt(document.getElementById('oName').value);


  try {
    if (age <= 5) {
      throw document.getElementById('badF').style.display = "block", document.getElementById('okF').style.display = "none", document.getElementById('danger').style.display = "block", document.getElementById('info').style.display = "none" ;
    }else if (age > 5) {
      document.getElementById('badF').style.display = "none";
      document.getElementById('okF').style.display = "block";
      document.getElementById('danger').style.display = "none";
      document.getElementById('info').style.display = "block" ;
    }
  } catch (err) {
    document.getElementById('demo').innerHTML = err;
  };


};





// IDEA: when the first name or any other name is inputed and the others are not let the inputed one be ticked good and the unentered ones be ticked bad;



function firstFunction(){
  var fName = document.getElementById('fName');
  fName.oninput = function(){
    var name = document.getElementsByTagName('input');
    if (name[0].value == "" || name[0].value == null ) {
      document.getElementById('badA').style.display = "block";
      document.getElementById('okA').style.display = "none";
      document.getElementById('danger').style.display = "block";
      document.getElementById('info').style.display = "none";
      return false;
    }else {
      document.getElementById('badA').style.display = "none";
      document.getElementById('okA').style.display = "block";
      document.getElementById('danger').style.display = "none";
      document.getElementById('info').style.display = "block";
    }
  }

}

var name = document.getElementsByTagName('input');



function secFunction(){
  var lName = document.getElementById('lName');
  lName.oninput= function(){
    var name = document.getElementsByTagName('input');
    if (name[1].value == "" || name[1].value == null ) {
      document.getElementById('badB').style.display = "block";
      document.getElementById('okB').style.display = "none";
      document.getElementById('danger').style.display = "block";
      document.getElementById('info').style.display = "none";
      return false;
    }else {
      document.getElementById('badB').style.display = "none";
      document.getElementById('okB').style.display = "block";
      document.getElementById('danger').style.display = "none";
      document.getElementById('info').style.display = "block";
    }
  }

}

function thirdFunction(){
  var oName = document.getElementById('oName');
  oName.oninput= function(){
    var name = document.getElementsByTagName('input');
    if (name[2].value == "" || name[2].value == null ) {
      document.getElementById('badC').style.display = "block";
      document.getElementById('okC').style.display = "none";
      document.getElementById('danger').style.display = "block";
      document.getElementById('info').style.display = "none";
      return false;
    }else {
      document.getElementById('badC').style.display = "none";
      document.getElementById('okC').style.display = "block";
      document.getElementById('danger').style.display = "none";
      document.getElementById('info').style.display = "block";
    }
  }

}

function fourthFunction(){
  var email = document.getElementById('email');
  email.oninput= function(){
    var name = document.getElementsByTagName('input');
    if (name[3].value == "" || name[3].value == null ) {
      document.getElementById('badD').style.display = "block";
      document.getElementById('okD').style.display = "none";
      document.getElementById('danger').style.display = "block";
      document.getElementById('info').style.display = "none";
      return false;
    }else if(name[3].value == ".com") {
      document.getElementById('badD').style.display = "none";
      document.getElementById('okD').style.display = "block";
      document.getElementById('danger').style.display = "none";
      document.getElementById('info').style.display = "block";
    }else {
      document.getElementById('badD').style.display = "none";
      document.getElementById('okD').style.display = "block";
      document.getElementById('danger').style.display = "none";
      document.getElementById('info').style.display = "block";
    }
  }

}



function fifthFunction(){
  var gender = document.getElementsByName('gender');
  if (gender[0].checked = true) {
    document.getElementById('badH').style.display = "none";
    document.getElementById('okH').style.display = "block";
  }else if (gender[1].checked = true) {
    document.getElementById('badH').style.display = "none";
    document.getElementById('okH').style.display = "block";
  } else {
    document.getElementById('badH').style.display = "block";
    document.getElementById('okH').style.display = "none";
  }
}

function eightFunction(){
  var prev = document.getElementById('prev');
  prev.oninput= function(){
    var name = document.getElementsByTagName('input');
    if (name[8].value == "" || name[8].value == null ) {
      document.getElementById('badI').style.display = "block";
      document.getElementById('okI').style.display = "none";
      document.getElementById('danger').style.display = "block";
      document.getElementById('info').style.display = "none";
      return false;
    }else {
      document.getElementById('badI').style.display = "none";
      document.getElementById('okI').style.display = "block";
      document.getElementById('danger').style.display = "none";
      document.getElementById('info').style.display = "block";
    }
  }

}

function nineFunction(){
  var clas = document.getElementById('clas');
  clas.oninput= function(){
    var name = document.getElementsByTagName('input');
    if (name[9].value == "" || name[9].value == null ) {
      document.getElementById('badJ').style.display = "block";
      document.getElementById('okJ').style.display = "none";
      document.getElementById('danger').style.display = "block";
      document.getElementById('info').style.display = "none";
      return false;
    }else {
      document.getElementById('badJ').style.display = "none";
      document.getElementById('okJ').style.display = "block";
      document.getElementById('danger').style.display = "none";
      document.getElementById('info').style.display = "block";
    }
  }

}



submit.onclick = firstFunction(), secFunction(), thirdFunction(), fourthFunction(), fifthFunction(), eightFunction(), nineFunction();

/*var name = document.getElementsByTagName('input')[1];
if (name.value == "" || name.value == null ) {
  document.getElementById('badB').style.display = "block";
  document.getElementById('danger').style.display = "block";
  return false;
}else {
  document.getElementById('badB').style.display = "none";
  document.getElementById('okB').style.display = "block";
  document.getElementById('danger').style.display = "none";
}*/



/*submit.onclick = function(){
  var Namer = {
    Name0:document.getElementsByTagName('input')[0].value,
    Name1:document.getElementsByTagName('input')[1].value,
    Name2:document.getElementsByTagName('input')[2].value,
    Name3:document.getElementsByTagName('input')[3].value,
    Name4:document.getElementsByTagName('input')[4].value,
    Name5:document.getElementsByTagName('input')[5].value,
    Name6:document.getElementsByTagName('input')[6].value,
    Name7:document.getElementsByTagName('input')[7].value,
    firstName: document.getElementById('fName').value,
    lastName: document.getElementById('lName').value,
    otherName: document.getElementById('oName').value
  };

      if (Namer.Name0 == "" || Namer.Name0 == null){
        document.getElementById('badA').style.display = "block";
        document.getElementById('danger').style.display = "block";
        return false;
      }
      else {
        document.getElementById('badA').style.display = "none";
        document.getElementById('okA').style.display = "block";
        document.getElementById('danger').style.display = "none";
        return false;
      }


}*/


/*  try {
    if (age <= 6) {
      throw document.getElementById('bad').style.display = "block";
    }else if (age > 6) {
      document.getElementById('bad').style.display = "none";
      document.getElementById('ok').style.display = "block";
    }
  } catch (err) {
    document.getElementById('demo').innerHTML = err;
  };


};*/


  var male = document.getElementById('male');
  var female = document.getElementById('female');


    submit.addEventListener("checked", function(){
      if (male.checked) {
        document.getElementById('bad').style.display = "none";
      } else if (female.checked) {
        document.getElementById('bad').style.display = "none";
      }else {
        document.getElementById('bad').style.display = "block";
      }
    });
