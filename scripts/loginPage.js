const fs = require("fs");
const path = require("path");
var $ = require("jquery");
const DatabaseName = "DB";
let pathName = path.join(__dirname, 'data');
let file = path.join(pathName, DatabaseName);

//utility function
function checkValue(value){
  if(value===undefined || value===null || value.trim()==="") return false;
  return true;
}

localStorage.removeItem('rollNo');
localStorage.removeItem('name');

$('.submitButton').click(function(){
  var name = $('#name').val();
  var rollNo = $('#rollNo').val();

  if(!checkValue(name) || !checkValue(rollNo)){
    window.alert("Please fill all the fields.");
    return;
  }

  localStorage.setItem("name",name);
  localStorage.setItem("rollNo", rollNo);

  document.location.replace('./details.html');
});