import angular from "angular";

class DiarySessionController {

    constructor(){
    }
}

DiarySessionController.$inject = [];

import template from "./diary-session.html";
import "./diary-session.scss";

angular.module("webapp")
    .component("diarySession", {
        controller: DiarySessionController,
        templateUrl: template,
        bindings: {
            // scholarshipHolders: "<"
            session: "<"
        }
    });