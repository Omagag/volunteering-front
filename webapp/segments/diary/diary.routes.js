import "./diary.controller"
import "./diary.service"
import template from "./diary.html";

import "./components/diary-pending-list.component"
import "./components/diary-schedule-form.component"

let diaryRoute = {
    templateUrl : template,
    controller : "DiaryController",
    controllerAs : "DiaryCtrl"
};

export default diaryRoute;
