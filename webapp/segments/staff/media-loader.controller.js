import angular from "angular";

class MediaLoaderController {

    constructor(ScholarLevelService, MediaLoaderService, userSession){
        this.userSession = userSession;
        this._scholarLevelService = ScholarLevelService;
        this._mediaLoaderService = MediaLoaderService;
        this.data = this._scholarLevelService.data
        this.localData = this._mediaLoaderService.data;

        this.isMediaCointeiner = false;

        this.loadMenu();
        this.gradeMenus = [];
        this.GRADE_SELECTED = "item-grade-selected";
        this.sessionMenus = [];
        this.SESSION_SELECTED = "item-session-selected";

        this._mediaLoaderService.getAvailableOptions();
        this.FILE_TYPE = "FILE";
        this.URL_TYPE = "URL";


        // TODO: Resources List
        this.resourcesList = [
            {
                type: this.URL_TYPE,
                value: "https://www.google.com"
            },
            {
                type: this.FILE_TYPE,
                value: "https://www.google.com"
            }
        ];
    }

    loadMenu() {
        this._scholarLevelService.getScholarLevels();
    }
    onScholarLevelMenuSelected(id) {
        this.gradeMenus = [];
        this.sessionMenus = [];
        this.isMediaCointeiner = false;

        if (id != null) {
            this.data.scholarLevels.forEach((scholarLevel)=>{
                if (scholarLevel.id === id) {
                    this.gradeMenus = scholarLevel.scholarGrades;
                }
            });
        }
    }
    onScholarGradeMenuSelected(id) {
        this.sessionMenus = [];
        this.isMediaCointeiner = false;

        if (id != null) {
            this.gradeMenus.forEach((scholarGrade)=>{
                if (scholarGrade.id === id) {
                    this.sessionMenus = scholarGrade.scholarSessions;
                }
            });
        }
    }
    onScholarSessionMenuSelected(id) {
        this.isMediaCointeiner = true;
    }

    newResource(type) {
        this.resourcesList.push({
            type: type
        })
    }
    removeResource(resource) {
        let index = this.resourcesList.indexOf(resource);
        this.resourcesList.splice(index, 1);
    }

}

MediaLoaderController.$inject = ["ScholarLevelService", "MediaLoaderService", "userSession"];

angular.module("webapp")
       .controller("MediaLoaderController", MediaLoaderController);
