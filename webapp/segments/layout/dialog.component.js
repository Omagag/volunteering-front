import angular from "angular";

class DialogController {
    constructor() {
        this.dialogHeightClass = "";
        this.dialogSmallClass = "dialog-small";
        this.dialogNormalClass = "dialog-normal";
        this.dialogLargeClass = "dialog-large";

        this.$onChanges = this.onChange;
        // this.onChange();
    }
    onChange() {
        if (this.dialogData.hasOwnProperty("messageOne") && this.dialogData.hasOwnProperty("messageTwo")) {
            this.dialogHeightClass = this.dialogNormalClass;
        } else if (this.dialogData.hasOwnProperty("messageOne") || this.dialogData.hasOwnProperty("messageTwo")) {
            this.dialogHeightClass = this.dialogSmallClass
        }
    }
}

DialogController.$inject = [];

import template from "./dialog.html";
import "./dialog.scss";

angular.module("webapp")
       .component("dtDialog", {
           controller: DialogController,
           templateUrl: template,
           bindings: {
               dialogData: "<",
               onConfirm: "&",
               onCancel: "&"
           }
       });