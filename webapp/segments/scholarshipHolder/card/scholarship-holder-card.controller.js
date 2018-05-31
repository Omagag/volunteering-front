import angular from "angular";

class ScholarshipHolderCardController {
    
    constructor(ScholarshipHolderService){
        this._scholarshipHolderService = ScholarshipHolderService;
        this.data = this._scholarshipHolderService.data;
        this.loadScholarshipHolders();
    }
    loadScholarshipHolders() {
        this._scholarshipHolderService.loadList();
    }
}

ScholarshipHolderCardController.$inject = ["ScholarshipHolderService", "userSession"];

angular.module("webapp")
       .controller("ScholarshipHolderCardController", ScholarshipHolderCardController);
