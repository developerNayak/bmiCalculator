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

$('.submitButton').click(function(){
  console.log('Calculate button clicked.');

  //saving the data 
  fs.readFile(file, function(err, data){
    if(err){
      console.log("No file exists, creating a new one.");

            //Parent Object
            var toStore = {
              "BMIinfo" : []
          }; 

          var bmiObj = {};

      //data to be stored
      var name = $('#name').val();
      var rollNo = $('#rollNo').val();
      var weight = $('#weight').val();
      var height = $('#height').val();
      var date = $('#date').val();
      

      if(!checkValue(name) || !checkValue(rollNo) || !checkValue(weight) ||  !checkValue(height)
      || !checkValue(date)){
        window.alert("Please enter all the values before saving.");
        return;
      }
      
      var bmi = parseFloat(parseFloat(weight)/((parseFloat(height)*parseFloat(height))/10000)).toFixed(2);
      window.alert("Your BMI is "+bmi);
      
      bmiObj['name'] = name;
      bmiObj['rollNo'] = rollNo;
      bmiObj['weight'] = weight;
      bmiObj['height'] = height;
      bmiObj['bmi'] = bmi;
      bmiObj['date'] = date;

      toStore.BMIinfo.push(bmiObj);

            //Finally store the data
            var finalData = JSON.stringify(toStore);
            fs.writeFile(file, finalData, function(err){
              if(err){
                console.log("err has occured");
              } else{
                console.log("Data Saved Successfully!");
                document.location.replace('./home.html');
              }
              return;
            })

    } else {
      //db file existss
      toStore = JSON.parse(data);
      
      var bmiObj = {};

      //data to be stored
      var name = $('#name').val();
      var rollNo = $('#rollNo').val();
      var weight = $('#weight').val();
      var height = $('#height').val();
      var date = $('#date').val();
      

      if(!checkValue(name) || !checkValue(rollNo) || !checkValue(weight) ||  !checkValue(height)
      || !checkValue(date)){
        window.alert("Please enter all the values before saving.");
        return;
      }
      
      var bmi = parseFloat(parseFloat(weight)/((parseFloat(height)*parseFloat(height))/10000)).toFixed(2);
      window.alert("Your BMI is "+bmi);
      
      bmiObj['name'] = name;
      bmiObj['rollNo'] = rollNo;
      bmiObj['weight'] = weight;
      bmiObj['height'] = height;
      bmiObj['bmi'] = bmi;
      bmiObj['date'] = date;

      toStore.BMIinfo.push(bmiObj);

            //Finally store the data
            var finalData = JSON.stringify(toStore);
            fs.writeFile(file, finalData, function(err){
              if(err){
                console.log("err has occured");
              } else{
                console.log("Data Saved Successfully!");
                document.location.replace('./home.html'); 
              }
              return;
            })

    }
  });
});
