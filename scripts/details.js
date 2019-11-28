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

//Load the details
fs.readFile(file, function(err, data){
  if(!err){
    var dataObj = JSON.parse(data);
    var bmiArr = dataObj.BMIinfo;
    var datafound = false;

    bmiArr.map(function(item,index){
      if(localStorage.getItem("name")==item.name && localStorage.getItem("rollNo")==item.rollNo){
       //display details
       var markup = '<div class="card mx-auto mb-5" style="width: 18rem;"> <img src="bmiDetails.jpg" class="card-img-top"> <div class="card-body"> <h5 class="card-title" id="date">Date: '+item.date+'</h5> </div> <ul class="list-group list-group-flush"> <li class="list-group-item"> Name : '+item.name+'</li> <li class="list-group-item">BMI : '+item.bmi+'</li> <li class="list-group-item"> Weight : '+item.weight+'</li> <li class="list-group-item"> Mass : '+item.weight+'</li> </ul> </div>';
       $('.detailsDiv').append(markup);
       datafound = true;
      }
    });

    if(!datafound){
      window.alert("Please check the roll number and name and try again.");
      document.location.replace('./loginPage.html');
    }
  }else{
    window.alert('No data found.');
  }
});