import angular from "angular";

class NavController {
    constructor(){
    }
}

NavController.$inject = [];

import template from "./nav.html";

angular.module("webapp")
       .component("appNav", {
           // controller: NavController,
           templateUrl: template
       });
