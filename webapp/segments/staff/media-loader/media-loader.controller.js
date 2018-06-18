import angular from "angular";

class MediaLoaderController {

    constructor(ScholarLevelService, MediaService, userSession, $location){
        this.userSession = userSession;
        this._scholarLevelService = ScholarLevelService;
        this._mediaService = MediaService;
        this._$location = $location;
        this.data = this._scholarLevelService.data;
        this.localData = this._mediaService.data;

        this.isMediaCointeiner = false;

        this.loadMenu();
        this.gradeMenus = [];
        this.GRADE_SELECTED = "item-grade-selected";
        this.sessionMenus = [];
        this.SESSION_SELECTED = "item-session-selected";

        this._mediaService.getAvailableOptions();
        this.FILE_TYPE = "FILE";
        this.URL_TYPE = "URL";

        // TODO: Testing dialog
        // Dialog info
        this.dialog = {};
        this.showDialog = false;


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
    onConfirmDialog() {
        this.showDialog = false;
    }
    onCancelDialog() {
        this.showDialog = false;
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

    onSaveResources() {
        this.showDialog = true;
        this.dialog = {
            title: "Felicidades",
            messageOne: "Se han guardado todos los recursos.",
            // messageTwo: "Se han guardado tos los recursos asdfasd fdas fadsf ads fasf asfsa fasdf a.",
            // buttonConfirmLabel: "Confirmar",
            buttonCancelLabel: "Cerrar"
        }
    }
    onPreview() {
        this._$location.path("/staff/media/viewer");
    }
}

MediaLoaderController.$inject = ["ScholarLevelService", "MediaService", "userSession", "$location"];

angular.module("webapp")
       .controller("MediaLoaderController", MediaLoaderController);
