import angular from "angular";

class DiaryScholarchipHolderRowController {

    constructor(){
        this.isAttendConfirmation = false;
        this.isAttendEvalua = false;
        // this.isAttended = "";

        this.$onInit = this.onInit;
        this.$onChanges = this.onInit;
    }
    onInit() {
        if (this.readyToEvaluate) {
            this.showAttendConfirmation(true);
        }
        if (this.scholarshipHolder.hasOwnProperty("evaluation")) {
            this.showEvaluation(true);
        }
    }
    showAttendConfirmation(show){
        this.isAttendConfirmation = show;
    }

    showEvaluation(show){
        this.isAttendEvalua = show;
    }

    onConfirmAttend() { // TODO: No se necesitará la variable "show"
        // TODO: Checar "ng-model", buscar como utilizar este metodo en angular js para input tipo checkbox
        // if (this.isAttended === "Si") {

        if (this.scholarshipHolder.hasOwnProperty("isAttended")) {
            if (this.scholarshipHolder.isAttended === "Si") {
                // al dar click en "si" se va a mostrar el div de calificar y comentarios,
                this.showEvaluation(true);
                this.showAttendConfirmation(true);
            } else{
                // al dar click en "no" se debe ocultar el div de asistencia.
                this.showAttendConfirmation(true);
            }
        } else {
            // TODO: agregar una alerta para indicar que se debe seleccionar alguna opción
            this.scholarshipHolder.mensaje = "Debe seleccionar una opción."
        }
    }
}

DiaryScholarchipHolderRowController.$inject = [];

import template from "./diary-scholarship-holder-row.html";
import "./diary-scholarship-holder-row.scss";

angular.module("webapp")
    .component("diaryScholarchipHolderRow", {
        controller: DiaryScholarchipHolderRowController,
        templateUrl: template,
        bindings: {
            scholarshipHolder: "<",
            readyToEvaluate: "<"
        }
    });