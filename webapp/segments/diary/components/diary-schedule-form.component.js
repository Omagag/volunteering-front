import angular from "angular";

class DiaryScheduleFormController {
    
    constructor(uibDateParser){
        let date = new Date();

        this.format = "dd/MM/yyyy";
        this.form = {date: date};
    }
    dateOptions() {
        // let dateOptions = {
        //     formatDay:
        // };
        // return dateOptions;
    }
}

DiaryScheduleFormController.$inject = ["uibDateParser"];

// Dependencies
import "angular-ui-bootstrap/dist/ui-bootstrap-csp.css";
// import "angular-ui-bootstrap/dist/ui-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import template from "./diary-schedule-form.html";
import "./diary-schedule-form.styles.scss";


angular.module("webapp")
       .component("diaryScheduleForm", {
           controller: DiaryScheduleFormController,
           templateUrl: template,
           bindings: {
           }
       });
