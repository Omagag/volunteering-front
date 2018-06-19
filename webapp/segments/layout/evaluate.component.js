import angular from "angular";

class EvaluateController {
    constructor(){
        this.$onInit = this.init;
    }
    init() {
        $(".form-evaluate").FlowupLabels({
            feature_onInitLoad: true,
            class_focused:      "focused",
            class_populated:    "populated"
        });

        if (angular.isUndefined(this.hideLabel)) {
            this.hideLabel = false;
        }
        if (angular.isUndefined(this.placeholder)) {
            this.placeholder = "";
        }
        if (angular.isUndefined(this.buttonClass)) {
            this.buttonClass = "";
        }
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
               evaluation: "<",
               hideLabel: "<",
               placeholder: "@",
               buttonClass: "@"
           }
       });
