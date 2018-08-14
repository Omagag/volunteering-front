import angular from "angular";

class HeaderController {
    constructor(){
        this.classActive = "active";

        this.burgerStats = {
            class: ""
        };

        // this.$onInit = this.onInit;
    }
    onInit() {
    }
    onBurgerMenuClick() {
        if (this.burgerStats.class === this.classActive) {
            this.burgerStats.class = "";
        } else {
            this.burgerStats.class = this.classActive;
        }
        this.onBurgerButton({classActive: this.burgerStats.class});
    }
}

HeaderController.$inject = [];

import template from "./header.html";

angular.module("webapp")
       .component("appHeader", {
           controller: HeaderController,
           templateUrl: template,
           bindings: {
               onBurgerButton: "&"
           }
       });
