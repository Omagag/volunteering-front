import angular from "angular";

class MentorFormController {
    
    constructor(){
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
