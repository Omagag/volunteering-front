import angular from "angular";

import template from "./scholarship-holder-session-card.html";
import "./scholarship-holder-session-card.styles.scss";

angular.module("webapp")
       .component("scholarshipHolderSessionCard", {
           templateUrl: template,
           bindings: {
               session: "<"
           }
       });
