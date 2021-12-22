import { Page } from "../framework/page.js";

var url = "https://ip-uacs.herokuapp.com/api/Convert/ToCelsius";
var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = JSON.stringify({x:5,y:6})

xhr.send(JSON.parse(data));

export class StudentsDetailPage extends Page {
  constructor() {
    super("Details");
  
  }

  createElement() {
    super.createElement();

   
    
  }
 
   
  


  getElementString() {
    
    return `<div style="margin: 20px;"><h3>Student details</h3></div>`;
  }
  
}
