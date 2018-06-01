import angular from "angular";

class DiaryPendingListController {
    
    constructor(){
    }
}

DiaryPendingListController.$inject = [];

import template from "./diary-pending-list.html";
import "./diary-pending-list.styles.scss";

angular.module("webapp")
       .component("diaryPendingList", {
           controller: DiaryPendingListController,
           templateUrl: template,
           bindings: {
           }
       });
