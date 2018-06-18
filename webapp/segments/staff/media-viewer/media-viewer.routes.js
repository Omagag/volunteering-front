import "./media-viewer.controller"
import "../media.service"
import template from "./media-viewer-view.html";

import "./media-viewer.styles.scss";

// import "../components/upload-video.component";
import "../components/view-resources-row.component";

let contentViewerRoute = {
    templateUrl : template,
    controller : "MediaViewerController",
    controllerAs : "MVCtrl"
};

export default contentViewerRoute;
