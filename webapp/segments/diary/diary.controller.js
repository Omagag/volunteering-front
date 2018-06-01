import angular from "angular";

class DiaryController {
    
    constructor(DiaryService, userSession){
        this._diaryService = DiaryService;
        this.userData = this._diaryService.userData;
        this.userSession = userSession;
        // this.loadPage();
    }
    loadPage() {
        // this._diaryService.loadData();
    }
}

DiaryController.$inject = ["DiaryService", "userSession"];

angular.module("webapp")
       .controller("DiaryController", DiaryController);
