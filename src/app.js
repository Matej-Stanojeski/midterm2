import $ from "jquery";
import { ApplicationBase } from "./framework/application-base.js";
import { AddStudentPage } from "./pages/add-student.js";
import { StudentPage } from "./pages/student-page.js";
import { HomePage } from "./pages/home-page.js";
import { TextPage } from "./pages/text-page.js";
import { StudentDataService } from "./services/student-data-service.js";
import { StudentsDetailPage } from "./pages/student-details.js";
export class App extends ApplicationBase {
  constructor() {
    super("Internet Programming");
    this.dataService = new StudentDataService();
    let url = "https://ip-uacs.herokuapp.com/api/student";
    this.getData(url).then((student) => {
      this.dataService.loadData(student);

    });

    this.addRoute("Home", new HomePage(), true);
    this.addRoute("Students", new StudentPage());
    this.addRoute("Text", new TextPage());
    this.addRoute("StudentDetailPage", new StudentsDetailPage());
    this.addRoute("AddStudent", new AddStudentPage(), false, false);
  }
}

export let application = new App();
application.show($("body"));
