// var text =document.body.innerHTML;
// console.log(text);

function nameChecker(name){

  if(name == "Larry"){
    alert("Welcome Larry");
  }
  else if(name == "Joseph"){
    alert("Welcome Joseph");
  }
  else if(name == "Julian"){
    alert("Welcome Creater");
  }
  else{
    document.body.innerHTML="";
  }
}

var userName = prompt("Input name ");
nameChecker(userName);

function revealName(){
  var name = document.getElementById("name");
  name.innerHTML = "Julian Grande";
}
