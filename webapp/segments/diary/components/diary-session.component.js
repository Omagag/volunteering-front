import angular from "angular";

class DiarySessionController {

    constructor(uibDateParser){
        this._uibDateParser = uibDateParser;
        this.$onInit = this.onInit;
    }
    onInit() {
        let sessionDate = this._uibDateParser.parse(this.session.date, "dd/MM/yyyy", new Date());
        // let currentDate = this._uibDateParser.parse("dd/MM/yyyy", new Date()};
        let currentDate = new Date();
        // this.session.showAttendQuestion = sessionDate.getTime() <= currentDate.getTime();
        if (this.session.status === "SCHEDULED") {
            this.session.showSessionDoneQuestion = false;
            this.session.showConfirmEvaluateButton = true;
        } else if (this.session.status === "PENDING TO EVALUATE") {
            this.session.showSessionDoneQuestion = true;
        } else if (this.session.status === "CANCELED") {
            this.session.showSessionDoneQuestion = false;
        } else if (this.session.status === "EVALUATED") {
            this.session.showSessionDoneQuestion = false;
        } else if (this.session.status === "SCHEDULED AGAIN") {
            this.session.showSessionDoneQuestion = false;
        }
    }
    onSessionConfirmation() {
        if (this.session.hasOwnProperty("hasBeenDone")) {
            if (this.session.hasBeenDone) {
                this.session.showSessionDoneQuestion = true;
                this.session.showAttendQuestion = true;
                this.session.showConfirmEvaluateButton = false;
            } else {
                this.session.showSessionDoneQuestion = true;
                this.session.showAttendQuestion = false;
                this.session.showConfirmEvaluateButton = false;
                // TODO: Show the Comment and Reschedule dialog
            }
        }
    }
}

DiarySessionController.$inject = ["uibDateParser"];

import template from "./diary-session.html";
import "./diary-session.scss";

angular.module("webapp")
    .component("diarySession", {
        controller: DiarySessionController,
        templateUrl: template,
        bindings: {
            // scholarshipHolders: "<"
            session: "<"
        }
    });