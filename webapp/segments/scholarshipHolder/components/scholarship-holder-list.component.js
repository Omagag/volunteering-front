import angular from "angular";

class ScholarshipHolderListController {
    
    constructor(){
    }
}

ScholarshipHolderListController.$inject = [];

import template from "./scholarship-holder-list.html";
import "./scholarship-holder-list.styles.scss";

import "./scholarship-holder-sessions.component";

angular.module("webapp")
       .component("scholarshipHolderList", {
           controller: ScholarshipHolderListController,
           templateUrl: template,
           bindings: {
               scholarshipHolders: "<"
           }
       });
