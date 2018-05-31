import angular from "angular";

class ScholarshipHolderListController {
    
    // constructor(ScholarshipHolderService){
    constructor(){
        // this._scholarshipHolderService = ScholarshipHolderService;
        // this.data = this._scholarshipHolderService.data;
        // this.loadScholarshipHolders();
    }
    // loadScholarshipHolders() {
    //     this._scholarshipHolderService.loadList();
    // }
}

// ScholarshipHolderListController.$inject = ["ScholarshipHolderService"];
ScholarshipHolderListController.$inject = [];

import template from "./scholarship-holder-list.html";
import "./scholarship-holder-list.styles.scss";

// import "./scholarship-holder-detail.component";

angular.module("webapp")
       .component("scholarshipHolderList", {
           controller: ScholarshipHolderListController,
           templateUrl: template,
           bindings: {
               scholarshipHolders: "<"
           }
       });
