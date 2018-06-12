import angular from "angular";

class HeaderController {
    constructor(){
    }
    burgerMenuFX() {
        $(".burguer").on('click', function(){
            $(this).toggleClass('active');
            $(".container-nav").toggleClass('active');
        });
    }
}

HeaderController.$inject = [];

import template from "./header.html";

angular.module("webapp")
       .component("appHeader", {
           controller: HeaderController,
           templateUrl: template
       });
