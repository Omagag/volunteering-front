import angular from "angular";

class DiaryController {
    
    constructor(DiaryService, ScholarLevelService, userSession){
        this._diaryService = DiaryService;
        this.data = this._diaryService.data;
        this._scholarLevelService = ScholarLevelService;
        this.scholarMenuData = this._scholarLevelService.data;
        this.userSession = userSession;

        // Init
        this._diaryService.loadSessions();
        this._scholarLevelService.getScholarLevels();


        // Attributes
        this.isDiaryShowed = false;
        this.gradeMenus = [];
        this.GRADE_SELECTED = "item-grade-selected";
        this.sessionMenus = [];
        this.SESSION_SELECTED = "item-session-selected";
    }
    onScholarLevelMenuSelected(id) {
        this.gradeMenus = [];
        this.sessionMenus = [];
        this.isDiaryShowed = false;

        if (id != null) {
            this.scholarMenuData.scholarLevels.forEach((scholarLevel)=>{
                if (scholarLevel.id === id) {
                    this.gradeMenus = scholarLevel.scholarGrades;
                }
            });
        }
    }
    onScholarGradeMenuSelected(id) {
        this.sessionMenus = [];
        this.isDiaryShowed = false;

        if (id != null) {
            this.gradeMenus.forEach((scholarGrade)=>{
                if (scholarGrade.id === id) {
                    this.sessionMenus = scholarGrade.scholarSessions;
                }
            });
        }
    }
    onScholarSessionMenuSelected(id) {
        this.isDiaryShowed = true;
    }
}

DiaryController.$inject = ["DiaryService", "ScholarLevelService", "userSession"];

angular.module("webapp")
       .controller("DiaryController", DiaryController);
