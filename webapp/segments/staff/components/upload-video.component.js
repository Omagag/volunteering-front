import angular from "angular";

class UploadVideoController{
    constructor(){
        this.selected = {};

    }

    validateOptions(){
    }
}


UploadVideoController.$inject = [];

import template from "./upload-video.html";
import "./upload-video.styles.scss";

angular.module("webapp")
    .component("uploadVideo", { // <udpload-resources></udpload-resources>
        controller: UploadVideoController,
        templateUrl: template,
        bindings: {
        }
    });
