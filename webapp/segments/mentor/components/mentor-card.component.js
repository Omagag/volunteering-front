import angular from "angular";

class MentorCardController {
    
    constructor(){
    }
}

MentorCardController.$inject = [];

import template from "./mentor-card.html";
import "./mentor-card.styles.scss";

angular.module("webapp")
       .component("mentorCard", {
           controller: MentorCardController,
           templateUrl: template,
           bindings: {
           }
       });
