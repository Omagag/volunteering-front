import angular from "angular";

class MediaViewerController {

    constructor(MediaService, userSession, $window){
        this.userSession = userSession;
        this._mediaService = MediaService;
        this._$window = $window;
        this.localData = this._mediaService.data;

        this.isMediaCointeiner = true;

        // this.loadMenu();
        // this.gradeMenus = [];
        // this.GRADE_SELECTED = "item-grade-selected";
        // this.sessionMenus = [];
        // this.SESSION_SELECTED = "item-session-selected";

        // this._mediaService.getAvailableOptions();
        this.PPT_TYPE = "PPT";
        this.WORD_TYPE = "WORD";
        this.EXCEL_TYPE = "EXCEL";
        this.IMAGE_TYPE = "IMAGE";
        this.URL_TYPE = "URL";

        // TODO: Testing dialog
        // Dialog info
        this.dialog = {};
        this.showDialog = false;


        // TODO: Resources List
        this.resourcesList = [
            {
                name: "Archivo Excel",
                // type: this.URL_TYPE,
                value: "archivo.xls"
            },
            {
                name: "Infography",
                // type: this.PPT_TYPE,
                value: "archivo.png"
            },
            {
                name: "Archivo Word",
                // type: this.WORD_TYPE,
                value: "archivo.doc"
            },
            {
                name: "Link a Google",
                // type: this.EXCEL_TYPE,
                value: "https://www.google.com"
            },
            {
                name: "Link a Google",
                // type: this.IMAGE_TYPE,
                value: "https://www.google.com"
            },
            {
                name: "Archivo Ppt",
                // type: this.WORD_TYPE,
                value: "archivo.ppt"
            },
            {
                name: "Link a Google",
                // type: this.EXCEL_TYPE,
                value: "https://www.google.com"
            },
            {
                name: "Link a Google",
                // type: this.IMAGE_TYPE,
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
    onBack() {
        this._$window.history.back();
    }
}

MediaViewerController.$inject = ["MediaService", "userSession", "$window"];

angular.module("webapp")
       .controller("MediaViewerController", MediaViewerController);
