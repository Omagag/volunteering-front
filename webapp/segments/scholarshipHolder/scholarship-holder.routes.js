import "./scholarship-holder.controller"
import "./scholarship-holder.service"
import template from "./scholarship-holder.html";

import "./components/scholarship-holder-list.component";
import "./components/scholarship-holder-status-nomenclature.component";

let scholarshipHolderHomeRoute = {
    templateUrl : template,
    controller : "ScholarshipHolderController",
    controllerAs : "SHCtrl"
};

export default scholarshipHolderHomeRoute;
