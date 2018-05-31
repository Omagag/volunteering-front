import angular from "angular";

class HomeController {
    
    constructor(HomeService, userSession){
        this._mentorCardService = HomeService;
        this.userData = this._mentorCardService.userData;
        this.userSession = userSession;
        this.loadPage();
    }
    loadPage() {
        this._mentorCardService.loadData();
    }
}

HomeController.$inject = ["HomeService", "userSession"];

angular.module("webapp")
       .controller("HomeController", HomeController);
