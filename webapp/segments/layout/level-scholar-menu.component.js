import angular from "angular";

class LevelScholarMenuController {
    constructor(){
        this.hideGradeMenu(true);
    }
    hideGradeMenu(enable) {
        let gradeMenu = document.getElementById("grade-menu");
        if (enable) {
            gradeMenu.className = "hide";
        } else {
            gradeMenu.className = "show";
        }

    }
    onClickScholarLevel(id) {

    }
}

LevelScholarMenuController.$inject = [];

import template from "./level-scholar-menu.html";

angular.module("webapp")
       .component("levelScholarMenu", { // <level-scholar-menu></level-scholar-menu>
           controller: LevelScholarMenuController,
           templateUrl: template,
           bindings: {
               scholarLevels: "<"
           }
       });
