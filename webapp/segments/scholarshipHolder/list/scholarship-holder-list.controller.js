import angular from "angular";

class ScholarshipHolderController {
    
    constructor(ScholarshipHolderService, userSession){
        this.userSession = userSession;
        this._scholarshipHolderService = ScholarshipHolderService;
        this.data = this._scholarshipHolderService.data;
        this.loadScholarshipHolders();
    }
    loadScholarshipHolders() {
        this._scholarshipHolderService.loadList();
    }
}

ScholarshipHolderController.$inject = ["ScholarshipHolderService", "userSession"];

angular.module("webapp")
       .controller("ScholarshipHolderController", ScholarshipHolderController);
