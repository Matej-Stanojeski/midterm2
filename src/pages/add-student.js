import { application } from "../app.js";
import { Student } from "../classes/student.js";
import { Page } from "../framework/page.js";
import { Button } from "../ui/button.js";
import { Number } from "../ui/number.js";
import { Text } from "../ui/text.js";

export class AddStudentPage extends Page {
  constructor() {
    super("Add New Student");
  }

  createElement() {
    super.createElement();

    let firstName = new Text("txtfirstName", "firstName");
    firstName.appendToElement(this.element);

    let lastName = new Text("txtlastName", "lastName");
    lastName.appendToElement(this.element);

    let studentId = new Text("txtstudentId", "studentId");
    studentId.appendToElement(this.element);

    let email = new Text("txtemail", "email");
    email.appendToElement(this.element);

    let createDateHours = new Number("txtHours", "Date Created");
    createDateHours.appendToElement(this.element);

    let btn = new Button("Save");
    btn.appendToElement(this.element);
    btn.element.click(() =>
      this.saveStudent(
        firstName.getValue(),
        lastName.getValue(),
        studentId.getValue(),
        email.getValue(),
        createDateHours.getValue()
      )
    );
  }

  getElementString() {
    return '<div style="margin:20px;"><h3>New Student</h3></div>';
  }

  saveStudent(firstName, lastName, studentId, email, createDateHours) {
    let student = new Student(firstName, lastName, email, createDateHours, studentId);
    console.log(student);
    application
      .postData("https://ip-uacs.herokuapp.com/api/student", student)
      .then((result) => {
        console.log(result);
      });
  }
}
