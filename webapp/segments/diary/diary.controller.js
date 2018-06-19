import angular from "angular";

class DiaryController {
    
    constructor(DiaryService, ScholarLevelService, userSession){
        this.userSession = userSession;
        this._diaryService = DiaryService;
        this.data = this._diaryService.data;
        this._scholarLevelService = ScholarLevelService;
        this.scholarMenuData = this._scholarLevelService.data;

        // Init
        this._diaryService.loadSessions();
        this._scholarLevelService.getScholarLevels();

    }
}

DiaryController.$inject = ["DiaryService", "ScholarLevelService", "userSession"];

angular.module("webapp")
       .controller("DiaryController", DiaryController);
