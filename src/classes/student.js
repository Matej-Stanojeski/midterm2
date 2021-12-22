import { Stud } from "./stud.js";

export class Student extends Stud {
  constructor(firstName, lastName, studentId, email, createDate) {
    super(firstName, lastName, studentId, "Student");
    this.email=email
    this.createDate = createDate;
  }
}
