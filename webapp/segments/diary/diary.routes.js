// // Dependencies
// import "angular-ui-bootstrap/dist/ui-bootstrap-csp.css";
// // import "angular-ui-bootstrap/dist/ui-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";

import "./diary.controller";
import "./diary.service";
import "./diary.styles.scss";
import template from "./diary.html";

import "./components/diary-pending-list.component";
import "./components/diary-schedule-form.component";

let diaryRoute = {
    templateUrl : template,
    controller : "DiaryController",
    controllerAs : "DiaryCtrl"
};

export default diaryRoute;
