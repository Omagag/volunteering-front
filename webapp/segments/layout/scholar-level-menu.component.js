import angular from "angular";

class ScholarLevelMenuController {
    constructor(){
        this.showScholarGradeMenu = false;
        this.TWO_COLS_CLASS = "two";
        this.THREE_COLS_CLASS = "three";
        this.FOUR_COLS_CLASS = "four";
        this.FIVE_COLS_CLASS = "five";
        this.MENU_SELECTED = "item-selected";

        this.colClass = "";

        this.$onInit = this.onInit;
    }
    onInit() {
        switch(this.scholarLevels.length - 1) {
            case 1:
                this.colClass = this.TWO_COLS_CLASS;
                break;
            case 2:
                this.colClass = this.THREE_COLS_CLASS;
                break;
            case 3:
                this.colClass = this.FOUR_COLS_CLASS;
                break;
            case 4:
                this.colClass = this.FIVE_COLS_CLASS;
                break;
            default:
                this.colClass = this.THREE_COLS_CLASS;
        }
        this.onClickScholarLevel(0);
    }
    onClickScholarLevel(id) {
        if (id != null) {
            if (id !== 0) {
                this.showScholarGradeMenu = true;
            }
            this.scholarGrades = [];

            for (let i = 0; i < this.scholarLevels.length; i++) {
               let scholarLevel = this.scholarLevels[i];
               if (this.scholarLevels[i].id === id) {
                   scholarLevel.class = this.colClass + " " + this.MENU_SELECTED;
                   this.scholarGrades = scholarLevel.scholarGrades;
               } else {
                   scholarLevel.class = this.colClass;
               }
            }
        }
    }
}

ScholarLevelMenuController.$inject = [];

import template from "./scholar-level-menu.html";
import "./scholar-level-menu.scss";

// Dependencies
import "../layout/scholar-grade-menu.component";

angular.module("webapp")
       .component("scholarLevelMenu", { // <level-scholar-menu></level-scholar-menu>
           controller: ScholarLevelMenuController,
           templateUrl: template,
           bindings: {
               scholarLevels: "<"
           }
       });
