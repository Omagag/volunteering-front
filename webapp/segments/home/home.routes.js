import "./home.controller"
import "./home.service"
import template from "./home.html";

import "./home.styles.scss"

let homeRoute = {
    templateUrl : template,
    controller : "HomeController",
    controllerAs : "HomeCtrl"
};

export default homeRoute;
