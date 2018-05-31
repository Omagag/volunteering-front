import angular from "angular";

class MentorController {
    
    constructor(MentorService, userSession){
        this._mentorCardService = MentorService;
        this.userData = this._mentorCardService.userData;
        this.userSession = userSession;
        this.loadPage();
    }
    loadPage() {
        this._mentorCardService.loadData();
    }
}

MentorController.$inject = ["MentorService", "userSession"];

angular.module("webapp")
       .controller("MentorController", MentorController);
