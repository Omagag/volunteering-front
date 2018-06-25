import angular from "angular";

class DiaryController {
    
    constructor(DiaryService, ScholarLevelService, userSession, $location){
        this.userSession = userSession;
        this._diaryService = DiaryService;
        this.data = this._diaryService.data;
        this._scholarLevelService = ScholarLevelService;
        this._$location = $location;
        this.scholarMenuData = this._scholarLevelService.data;

        // Init
        this.diary = {
            material: {
                score: 0
            }
        };

        this._diaryService.loadSessions();
        this._scholarLevelService.getScholarLevels();

        this.isDiaryShowed = false;
    }
    onLevelOrGradeMenuSelected() {
        this.isDiaryShowed = false;
    }
    onSessionMenuSelected(id) {
        this.isDiaryShowed = true;
        if (id === 1) {
            this.diary.material.score = 4;
        } else {
            this.diary.material.score = 0;
        }
    }
    onPreview() {
        this._$location.path("/staff/media/viewer");
    }
}

DiaryController.$inject = ["DiaryService", "ScholarLevelService", "userSession", "$location"];

angular.module("webapp")
       .controller("DiaryController", DiaryController);
