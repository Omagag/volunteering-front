import "./scholarship-holder-card.controller"
import "../scholarship-holder.service"
import template from "./scholarship-holder-card.html";

// Scholarship Holder Card
import "../components/scholarship-holder-card.component";

let scholarshipHolderCardRoute = {
    templateUrl : template,
    controller : "ScholarshipHolderCardController",
    controllerAs : "SHCardCtrl"
};

export default scholarshipHolderCardRoute;
