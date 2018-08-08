import angular from "angular";

class NavController {
    constructor($location){

        this.menus = [
            {name: "Mi Perfil", url: "/", class: ""},
            {name: "Mi Agenda", url: "/diary", class: ""},
            {name: "Lista de Becarios", url: "/scholarship-holder/", class: ""},
            {name: "Carga Multimedia", url: "/staff/media/loader", class: ""}
        ];
        this.classSelected = "selected";

        this.uri = $location.$$url;

        this.$onInit = this.onInit;
    }
    onInit() {
        this.buildMenu();

        if (angular.isUndefined(this.isSearchOption)) {
            this.isSearchOption = true;
        }
        if (this.isSearchOption) {
            $(".action-icon-search").on("click", function(){
                $(".search-header").addClass("active");
                if ($(".search-header").hasClass("active") && $(".action-main-nav").is(":visible") && $(".search-header .search-inpunt .search").val() !== "" && $(document).width() < 900) {
                    //$(".search-header .search-inpunt .search").val('');
                    $("#searchForm").submit();
                }
                setTimeout(function(){
                    $(".list-search").slideDown();
                    $(".action-main-nav").css("overflow", "visible");
                }, 500);
            });

            $(".close-icon-search").on("click", function(){
                $(".list-search").slideUp();

                setTimeout(function(){
                    $(".action-main-nav").css("overflow", "hidden");
                    $(".search-header").removeClass("active");
                }, 500);
            });
        }
    }
    buildMenu() {
        this.menus.forEach((menu) => {
            if (menu.url === this.uri) {
                menu.class = this.classSelected;
            } else {
                menu.class = "";
            }
        });
    }
}

NavController.$inject = ["$location"];

import template from "./nav.html";
import "./nav.scss";

angular.module("webapp")
       .component("appNav", {
           controller: NavController,
           templateUrl: template,
           bindings: {
               isSearchOption: "<"
           }
       });
