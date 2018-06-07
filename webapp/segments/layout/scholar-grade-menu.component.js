import angular from "angular";

class ScholarGradeMenuController {
    constructor(){
        this.TWO_COLS_CLASS = "two";
        this.THREE_COLS_CLASS = "three";
        this.FOUR_COLS_CLASS = "four";
        this.FIVE_COLS_CLASS = "five";
        this.MENU_SELECTED = "item-grade-selected";

        this.colClass = "";

        this.$onInit = this.onInit;
        this.$onChanges = this.onInit;
    }
    onInit() {
        switch(this.scholarGrades.length - 1) {
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
        this.onClickScholarGrade(0);
    }
    onClickScholarGrade(id) {
        if (id != null) {
            for (let i = 0; i < this.scholarGrades.length; i++) {
                let scholarGrade = this.scholarGrades[i];
                if (this.scholarGrades[i].id === id) {
                    scholarGrade.class = this.colClass + " " + this.MENU_SELECTED;
                } else {
                    scholarGrade.class = this.colClass;
                }
            }
        }
    }
}

ScholarGradeMenuController.$inject = [];

import template from "./scholar-grade-menu.html";
import "./scholar-grade-menu.scss";

angular.module("webapp")
       .component("scholarGradeMenu", { // <level-scholar-menu></level-scholar-menu>
           controller: ScholarGradeMenuController,
           templateUrl: template,
           bindings: {
               scholarGrades: "<"
           }
       });
