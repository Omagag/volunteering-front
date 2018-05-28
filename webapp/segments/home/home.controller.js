import angular from "angular";

class HomeController {
    
    constructor(HomeService){
        this._homeService = HomeService;
        this.userData = this._homeService.userData;
        this.loadPage();
    }
    loadPage() {
        this._homeService.loadData();
    }
}

HomeController.$inject = ['HomeService'];

angular.module("webapp")
       .controller("HomeController", HomeController);
