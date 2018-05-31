import angular from "angular";

import template from "./scholarship-holder-sessions.html";

angular.module("webapp")
       .component("scholarshipHolderSessions", {
           templateUrl: template,
           bindings: {
               sessions: "<"
           }
       });
