import angular from "angular";

class EmptyMessageController {
    constructor(){
    }
}

EmptyMessageController.$inject = [];

import template from "./empty-message.html";
import "./empty-message.scss";

angular.module("webapp")
       .component("emptyMessage", {
           controller: EmptyMessageController,
           templateUrl: template,
           bindings: {
               message: "@"
           }
       });
