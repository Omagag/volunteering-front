import "./content-loader.controller"
import "./content-loader.service"
import template from "./content-loader-view.html";

import "./content-loader.styles.scss";

import "../layout/level-scholar-menu.component";
import "./components/upload-resources-row.component";
import "./components/upload-resources.styles.scss";

let contentLoaderRoute = {
    templateUrl : template,
    controller : "ContentLoaderController",
    controllerAs : "CLCtrl"
};

export default contentLoaderRoute;
