import {Student} from "../classes/student.js";
import { DataError } from "./data-error.js";

export class StudentDataService {
  constructor() {
    this.students = [];
    this.errors = [];
  }

  loadData(stud) {
    for (let data of stud) {
      switch (data.type) {
        case "Student":
          if (this.validateStudentData(data)) {
            let student = this.loadStudent(data);
            this.students.push(student);
          } else {
            let e = new DataError("Invalid data type", data);
            this.errors.push(e);
          }
          break;
        default:
          let e = new DataError("Invalid data type", data);
          this.errors.push(e);
          break;
      }
    }
  }


  loadStudent(data) {
    try {
      let student = new Student(data.firsName, data.lastName, data.studentId,data.email,data.createDate);
      student.firstName=data.firstName;
    student.lastName=data.lastName;
    student.studentId=data.studentId
    student.email=data.email
    student.createDate = data.createDate;
      return student;
    } catch (e) {
      this.errors.push(new DataError("error loading student", data));
    }
    return null;
  }

  validateStudentData(data) {
    let requiredProps = "firstName lastName studentId email ".split(" ");
    let hasErrors = false;
    for (let field of requiredProps) {
      if (!data[field]) {
        this.errors.push(new DataError(`Invalid field ${field}`, data));
        hasErrors = true;
      }
    }
    if (Number.isNaN(Number.parseFloat(data.studentId))) {
      this.errors.push(new DataError(`Invalid studentid`, data));
      hasErrors = true;
    }
    if (this.stringNullOrEmpty(data.firstName)) {
      this.errors.push(new DataError(`Invalid firstName`, data));
      hasErrors = true;
    }
    if (this.stringNullOrEmpty(data.lastName)) {
      this.errors.push(new DataError(`Invalid lastName`, data));
      hasErrors = true;
    }

    return !hasErrors;
  }

  stringNullOrEmpty(str) {
    return (
      typeof str == "undefined" ||
      !str ||
      str.length === 0 ||
      str === "" ||
      !/[^\s]/.test(str) ||
      /^\s*$/.test(str) ||
      str.replace(/\s/g, "") === ""
    );
  }

  getStudentsBystudentId(firstName) {
    return this.students.find((student) => student.firsName === firstName);
  }

  getStudentsSortedBystudentId() {
    return this.students.sort((a, b) => {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      else 0;
    });
  }

  filterStudents(filter) {
    return this.students.filter((student) => student.make.indexOf(filter) >= 0);
  }
}
