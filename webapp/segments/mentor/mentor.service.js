import angular from "angular";

class MentorService {

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
    .service("MentorService", MentorService);
