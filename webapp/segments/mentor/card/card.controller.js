import angular from "angular";

class MentorCardController {
    
    constructor(MentorCardService, userSession){
        this._mentorCardService = MentorCardService;
        this.userData = this._mentorCardService.userData;
        this.userSession = userSession;
        this.loadPage();
    }
    loadPage() {
        this._mentorCardService.loadData();
    }
}

MentorCardController.$inject = ["MentorCardService", "userSession"];

angular.module("webapp")
       .controller("MentorCardController", MentorCardController);
