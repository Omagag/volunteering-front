import angular from "angular";

class MentorResumeController {
    
    constructor(){
    }
}

MentorResumeController.$inject = [];

import template from "./mentor-resume.html";
import "./mentor-resume.styles.scss";

angular.module("webapp")
       .component("mentorResume", {
           controller: MentorResumeController,
           templateUrl: template,
           bindings: {
               user: "<"
           }
       });
