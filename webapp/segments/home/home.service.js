import angular from "angular";

class HomeService {

    constructor(){
        this.userData = {};
    }
    loadData() {
        this.userData.firstname = "Omar";
        this.userData.surname = "García";
        this.userData.lastname = "González"
    }
}

angular.module("webapp")
    .service("HomeService", HomeService);
