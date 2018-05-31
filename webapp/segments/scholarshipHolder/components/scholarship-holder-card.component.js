import angular from "angular";

class ScholarshipHolderCardController {
    
    constructor(){
    }
}

ScholarshipHolderCardController.$inject = [];

import template from "./scholarship-holder-card.html";
import "./scholarship-holder-card.styles.scss";

angular.module("webapp")
       .component("scholarshipHolderCard", {
           controller: ScholarshipHolderCardController,
           templateUrl: template,
           bindings: {
               scholarshipHolders: "<"
           }
       });
