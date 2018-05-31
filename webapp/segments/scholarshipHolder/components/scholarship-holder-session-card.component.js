import angular from "angular";

import template from "./scholarship-holder-session-card.html";

angular.module("webapp")
       .component("scholarshipHolderSessionCard", {
           templateUrl: template,
           bindings: {
               session: "<"
           }
       });
