import "./scholarship-holder-list.controller"
import "../scholarship-holder.service"
import template from "./scholarship-holder-list.html";

// Scholarship Holder List
import "../components/scholarship-holder-list.component";
import "../components/scholarship-holder-status-nomenclature.component";

let scholarshipHolderRoute = {
    templateUrl : template,
    controller : "ScholarshipHolderController",
    controllerAs : "SHCtrl"
};

export default scholarshipHolderRoute;
