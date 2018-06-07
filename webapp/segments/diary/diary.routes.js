import "./diary.controller";
import "./diary.service";
import "./diary.styles.scss";
import template from "./diary.html";

import "./components/diary-pending-list.component"
import "./components/diary-schedule-form.component"
import "./components/diary-scholarship-holder-row.componet"
import "./components/diary-session.component"

let diaryRoute = {
    templateUrl : template,
    controller : "DiaryController",
    controllerAs : "DiaryCtrl"
};

export default diaryRoute;
