import angular from "angular";

class ViewResourcesRowController{
    constructor(){
        this.selected = {};
    }
    chooseIconFile(extension) {
        let imgSource = "";

        if (extension.endsWith(".doc") || extension.endsWith(".docx")) {
            imgSource = wordIcon;
        } else if (extension.endsWith(".xls") || extension.endsWith(".xlsx")) {
            imgSource = excelIcon;
        } else if (extension.endsWith(".pdf")) {
            imgSource = pdfIcon;
        } else if (extension.endsWith(".png") || extension.endsWith(".jpg") || extension.endsWith(".jpeg") || extension.endsWith(".bpm")
            || extension.endsWith(".svg")) {
            imgSource = imgIcon;
        } else if (extension.startsWith("http") || extension.endsWith("https")) {
            imgSource = urlIcon;
        } else {
            imgSource = docIcon;
        }
        return imgSource;
    }

}

import urlIcon from "../../../assets/img/link_icon.png";
import imgIcon from "../../../assets/img/furniture_icon.png";
import pdfIcon from "../../../assets/img/pdf_icon.png";
import docIcon from "../../../assets/img/document_icon.png";
import wordIcon from "../../../assets/img/word_icon.png";
import excelIcon from "../../../assets/img/excel_icon.png";

ViewResourcesRowController.$inject = [];

import template from "./view-resources-row.html";
import "./view-resources-row.styles.scss";

angular.module("webapp")
    .component("viewResourcesRow", {
        controller: ViewResourcesRowController,
        templateUrl: template,
        bindings: {
            resource: "<"
        }
    });
