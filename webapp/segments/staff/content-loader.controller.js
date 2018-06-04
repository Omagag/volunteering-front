import angular from "angular";

class ContentLoaderController {

    constructor(ScholarLevelService){
        this._scholarLevelService = ScholarLevelService;
        this.data = this._scholarLevelService.data;

        this.loadMenu();
    }
    loadMenu() {
        this._scholarLevelService.getScholarLevels();
    }

}

ContentLoaderController.$inject = ["ScholarLevelService", "userSession"];

angular.module("webapp")
       .controller("ContentLoaderController", ContentLoaderController);
