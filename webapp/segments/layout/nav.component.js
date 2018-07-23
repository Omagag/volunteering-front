import angular from "angular";

class NavController {
    constructor(){
        this.$onInit = this.onInit;
    }
    onInit() {
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
}

NavController.$inject = [];

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
