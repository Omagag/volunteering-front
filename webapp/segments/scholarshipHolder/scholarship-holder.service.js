import angular from "angular";

class ScholarshipHolderService {

    constructor() {
        this.data = {};
    }
    loadList() {
        this.data.scholarshipHolders = [
            {
                name: "Uno"
            },
            {
                name: "Dos"
            },
            {
                name: "Tres"
            },
            {
                name: "Cuatro"
            },
            {
                name: "Cinco"
            }
        ]
    }
}
angular.module("webapp")
    .service("ScholarshipHolderService", ScholarshipHolderService);
