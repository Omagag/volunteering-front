import angular from "angular";

class HomeController {
    
    constructor(HomeService, userSession){
        this._homeService = HomeService;
        this.userData = this._homeService.userData;
        this.userSession = userSession;
        this.loadPage();
    }
    loadPage() {
        this._homeService.loadData();
    }
}

HomeController.$inject = ["HomeService", "userSession"];

angular.module("webapp")
       .controller("HomeController", HomeController);
