import angular from "angular";

import "./app.modules";
import "./app.factory";
import "./app.run";
import appTranslations from "./settings/app.translate.config"
import appRoutes from "./app.routes";

// import appHeader from "./segments/layout/header.component";

angular.module("webapp")
       .config( appTranslations )
       .config( appRoutes );
