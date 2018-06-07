import angular from "angular";

class MediaLoaderController {

    constructor(ScholarLevelService, MediaLoaderService){
        this._scholarLevelService = ScholarLevelService;
        this._mediaLoaderService = MediaLoaderService;
        this.data = this._scholarLevelService.data
        this.localData = this._mediaLoaderService.data;

        this.loadMenu();
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
