import { application } from "../app.js";
import { Page } from "../framework/page.js";
import { DataTable } from "../ui/data-table.js";


export class TextPage extends Page {
  constructor() {
    super("Texts");
  
  }

  createElement() {
    super.createElement();

   
    
  }
 
   
  


  getElementString() {
    fetch("./src/Exam.txt").then(response => response.text())
    .then(text =>console.log(text))
    
    return `<div style="margin: 20px;"><h3>Text in console</h3></div>`;
  }
  
}
