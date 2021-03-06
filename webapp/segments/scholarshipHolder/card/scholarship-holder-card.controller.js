import angular from "angular";

class ScholarshipHolderCardController {
    
    constructor(ScholarshipHolderService, userSession, $routeParams){
        this._scholarshipHolderService = ScholarshipHolderService;
        this.data = this._scholarshipHolderService.data;
        this.get(parseInt($routeParams.id));
    }
    get(id) {
        this._scholarshipHolderService.get(id);
    }
}

ScholarshipHolderCardController.$inject = ["ScholarshipHolderService", "userSession", "$routeParams"];

angular.module("webapp")
       .controller("ScholarshipHolderCardController", ScholarshipHolderCardController);
