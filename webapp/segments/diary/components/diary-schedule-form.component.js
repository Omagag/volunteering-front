import angular from "angular";

class DiaryScheduleFormController {
    
    constructor(uibDateParser){
        let date = new Date();

        this.format = "dd/MM/yyyy";
        this.form = {date: date};
        this.init();
        // uibDateParser.format(this.format);
        // uibDateParser.input(this.form.date);
    }
    dateOptions() {
        // let dateOptions = {
        //     formatDay:
        // };
        // return dateOptions;
    }

    init() {
        $("#dairy-form").FlowupLabels({
            feature_onInitLoad: true,
            class_focused:      'focused',
            class_populated:    'populated'
        });
    }

}

DiaryScheduleFormController.$inject = ["uibDateParser"];

import template from "./diary-schedule-form.html";
import "./diary-schedule-form.styles.scss";

angular.module("webapp")
       .component("diaryScheduleForm", {
           controller: DiaryScheduleFormController,
           templateUrl: template,
           bindings: {
           }
       });
