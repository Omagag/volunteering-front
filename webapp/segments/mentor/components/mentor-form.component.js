import angular from "angular";

class MentorFormController {
    
    constructor(){
        this.$onInit = this.onInit;
    }
    onInit() {
        $("#mentor-form").FlowupLabels({
            feature_onInitLoad: true,
            class_focused:      "focused",
            class_populated:    "populated"
        });
    }

}

MentorFormController.$inject = [];

import template from "./mentor-form.html";

angular.module("webapp")
       .component("mentorForm", {
           controller: MentorFormController,
           templateUrl: template,
           bindings: {
           }
       });
