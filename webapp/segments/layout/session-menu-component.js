import angular from "angular";

class SessionMenuController {

    constructor(ScholarLevelService){
        this._scholarLevelService= ScholarLevelService;
        this.data = this._scholarLevelService.data;

        this.gradeMenus = [];
        this.sessionMenus = [];

        this.levelIdByDefault = 0;
        this.gradeIdByDefault = 0;

        this.GRADE_SELECTED = "item-grade-selected";
        this.SESSION_SELECTED = "item-session-selected";

        this.$onInit = this.onInit;
    }

    onInit() {
        // TODO: Select the first element of the levelMenus
        if(angular.isDefined(this.levelMenus)){
            this.levelMenus.forEach((levelMenu, index)=>{
                if (index === 0) {
                    this.levelIdByDefault = levelMenu.id;
                }
            });
        }
    }
    onScholarLevelMenuSelected(id) {
        this.gradeMenus = [];
        this.sessionMenus = [];
        if (id != null) {
            this._scholarLevelService.getScholarGrades(id);
            this.gradeMenus = this.data.scholarGrades;

            // TODO: If we need a default GradeMenu selected, we initialize the this.gradeIdByDefault
            this.gradeMenus.forEach((gradeMenu, index)=>{
                if (index === 0) {
                    this.gradeIdByDefault = gradeMenu.id;
                }
            });
        }
    }
    onScholarGradeMenuSelected(id) {
        this.sessionMenus = [];
        if (id != null) {
            this._scholarLevelService.getSessiosBy(id);
            this.sessionMenus = this.data.scholarSessions;
        }
    }
    onScholarSessionMenuSelected(id) {
        // this.isDiaryShowed = true;
        // TODO: Ejecutar función genérica
    }
}

SessionMenuController.$inject = ["ScholarLevelService"];

import template from "./session-menu.html";


angular.module("webapp")
    .component("sessionMenu", {
        controller: SessionMenuController,
        templateUrl: template,
        bindings: {
            levelMenus: "<"
        }

    });
