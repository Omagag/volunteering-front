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
        // this.session.isEvaluating = sessionDate.getTime() <= currentDate.getTime();
        if (this.session.status === "SCHEDULED") {
            this.session.isSessionDone = false;
        } else if (this.session.status === "PENDING TO EVALUATE") {
            this.session.isSessionDone = true;
        } else if (this.session.status === "CANCELED") {
            this.session.isSessionDone = false;
        } else if (this.session.status === "EVALUATED") {
            this.session.isSessionDone = false;
        } else if (this.session.status === "SCHEDULED AGAIN") {
            this.session.isSessionDone = false;
        }
    }
    onSessionConfirmation() {
        if (this.session.hasOwnProperty("hasBeenDone")) {
            if (this.session.hasBeenDone) {
                this.session.isSessionDone = false;
                this.session.isEvaluating = true;
                this.session.isConfirmEvaluate = true;
            } else {
                this.session.isSessionDone = false;
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