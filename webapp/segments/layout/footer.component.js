import angular from "angular";

class FooterController {
    constructor(){
    }
}

FooterController.$inject = [];

import template from "./footer.html";

angular.module("webapp")
       .component("appFooter", {
           // controller: FooterController,
           templateUrl: template
       });
