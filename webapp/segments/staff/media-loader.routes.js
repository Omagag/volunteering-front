import "./media-loader.controller"
import "./media-loader.service"
import template from "./media-loader-view.html";

import "./media-loader.styles.scss";

import "../layout/scholar-level-menu.component";
import "./components/upload-video.component";
import "./components/upload-resources-row.component";

let contentLoaderRoute = {
    templateUrl : template,
    controller : "MediaLoaderController",
    controllerAs : "CLCtrl"
};

export default contentLoaderRoute;
