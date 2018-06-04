import angular from "angular";

class ContentLoaderService {

    constructor(){
        this.data = {};
    }

}

angular.module("webapp")
    .service("ContentLoaderService", ContentLoaderService);
