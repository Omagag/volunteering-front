import angular from "angular";

class DiaryScholarchipHolderRowController {

    constructor(){
    }
}

DiaryScholarchipHolderRowController.$inject = [];

import template from "./diary-scholarship-holder-row.html";
import "./diary-scholarship-holder-row.scss";

angular.module("webapp")
    .component("diaryScholarchipHolderRow", {
        controller: DiaryScholarchipHolderRowController,
        templateUrl: template,
        bindings: {
            scholarshipHolder: "<"
        }
    });