import "./scholarship-holder-card.controller"
import "../scholarship-holder.service"
import template from "./scholarship-holder-card-view.html";

// Scholarship Holder Card
import "../components/scholarship-holder-card.component";
import "../components/scholarship-holder-session-card.component";

let scholarshipHolderCardRoute = {
    templateUrl : template,
    controller : "ScholarshipHolderCardController",
    controllerAs : "SHCardCtrl"
};

export default scholarshipHolderCardRoute;
