import angular from "angular";

class DiaryScholarshipHolderListController {

    constructor(){
    }
}

DiaryScholarshipHolderListController.$inject = [];

import template from "./diary-scholarship-holder-list.html";
import "./diary-scholarship-holder-list.scss";

angular.module("webapp")
    .component("diaryScholarshipHolderList", {
        controller: DiaryScholarshipHolderListController,
        templateUrl: template,
        bindings: {
            scholarshipHolders: "<"
        }
    });