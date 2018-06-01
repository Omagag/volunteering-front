import angular from "angular";

class DiaryScheduleFormController {
    
    constructor(){
    }
}

DiaryScheduleFormController.$inject = [];

import template from "./diary-schedule-form.html";
import "./diary-schedule-form.styles.scss";

angular.module("webapp")
       .component("diaryScheduleForm", {
           controller: DiaryScheduleFormController,
           templateUrl: template,
           bindings: {
           }
       });
