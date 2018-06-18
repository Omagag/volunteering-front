import angular from "angular";

class EvaluateController {
    constructor(){

    }
}

EvaluateController.$inject = [];

import template from "./evaluate.html";
import "./evaluate.scss";

angular.module("webapp")
       .component("evaluate", {
           controller: EvaluateController,
           templateUrl: template,
           bindings: {
               evaluation: "<"
           }
       });
