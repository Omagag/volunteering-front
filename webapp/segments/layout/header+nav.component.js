import angular from "angular";

class HeaderNavController {
    constructor(){
        this.menuClass = "";
    }
    onBurgerButton(active) {
        this.menuClass = active;
    }
}

HeaderNavController.$inject = [];

import template from "./header+nav.html";

angular.module("webapp")
       .component("appHeaderNav", {
           controller: HeaderNavController,
           templateUrl: template
       });
