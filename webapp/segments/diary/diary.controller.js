import angular from "angular";

class DiaryController {
    
    constructor(DiaryService, userSession){
        this._diaryService = DiaryService;
        this.data = this._diaryService.data;
        this.userSession = userSession;
        this._diaryService.loadSessions();
        // this.loadPage();
    }
}

DiaryController.$inject = ["DiaryService", "userSession"];

angular.module("webapp")
       .controller("DiaryController", DiaryController);
