import angular from "angular";

class ContentLoaderController {

    constructor(ScholarLevelService, ContentLoaderService){
        this._scholarLevelService = ScholarLevelService;
        this._contentLoaderService = ContentLoaderService;
        this.data = this._scholarLevelService.data
        this.localData = this._contentLoaderService.data;

        this.loadMenu();
        this._contentLoaderService.getAvailableOptions();
    }

    loadMenu() {
        this._scholarLevelService.getScholarLevels();
    }

}

ContentLoaderController.$inject = ["ScholarLevelService", "ContentLoaderService", "userSession"];

angular.module("webapp")
       .controller("ContentLoaderController", ContentLoaderController);
