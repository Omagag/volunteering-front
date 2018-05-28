import "./home.controller"
import "./home.service"
import template from "./home.html";

let homeRoute = {
    templateUrl : template,
    controller : "HomeController",
    controllerAs : "HomeCtrl"
};

export default homeRoute;
