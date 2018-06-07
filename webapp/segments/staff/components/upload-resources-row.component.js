import angular from "angular";

class UploadResourcesRowController{
    constructor(){
        this.selected = {};

    }

}


UploadResourcesRowController.$inject = [];

import template from "./upload-resources-row.html";
import "./upload-resources-row.styles.scss";

angular.module("webapp")
    .component("uploadResourcesRow", { // <udpload-resources></udpload-resources>
        controller: UploadResourcesRowController,
        templateUrl: template,
        bindings: {
            // availableOptions: "<"
            resource: "<",
            onRemove: "&"
        }
    });
