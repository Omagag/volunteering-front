import "./mentor.controller"
import "./mentor.service"
import template from "./mentor.html";

import "./components/mentor-card.component";
import "./components/mentor-form.component";

let mentorRoute = {
    templateUrl : template,
    controller : "MentorController",
    controllerAs : "MentorCtrl"
};

export default mentorRoute;
