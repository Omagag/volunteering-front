import "./card.controller"
import "./card.service"
import template from "./card.html";

let mentorCardRoute = {
    templateUrl : template,
    controller : "MentorCardController",
    controllerAs : "MentorCardCtrl"
};

export default mentorCardRoute;
