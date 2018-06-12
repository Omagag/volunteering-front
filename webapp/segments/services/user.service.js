import angular from "angular";

class UserService {

    constructor(){
        this.data = {};
    }
    getUser() {
        this.data.user = {

        }
    }

}

angular.module("webapp")
    .service("UserService", UserService);
