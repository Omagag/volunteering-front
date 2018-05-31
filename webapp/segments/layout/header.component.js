import angular from "angular";

class HeaderController {
    constructor(){
    }
}

HeaderController.$inject = [];

import template from "./header.html";

angular.module("webapp")
       .component("appHeader", {
           // controller: HeaderController,
           templateUrl: template
           // template: "<header class=\"container-fluid header\">" +
           // "    <div class=\"container\">" +
           // "        <div class=\"row\">" +
           // "            <div class=\"col-xs-4 col-lg-6 col-md-6 col-sm-5 logo\">" +
           // "                <a href=\"#\"><img src=\"../../assets/images/logo.png\"></a>" +
           // "            </div>" +
           // "            <div class=\" col-xs-8 col-lg-6 col-md-6 col-sm-7 perfil-nav\">" +
           // "                <div class=\"burguer\">" +
           // "                    <span></span>" +
           // "                    <span></span>" +
           // "                    <span></span>" +
           // "                </div>" +
           // "            </div>" +
           // "        </div>" +
           // "    </div>" +
           // "</header>"
       });
