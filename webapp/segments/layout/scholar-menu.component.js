import angular from "angular";

class ScholarMenuController {
    constructor(){
        this.TWO_COLS_CLASS = "two";
        this.THREE_COLS_CLASS = "three";
        this.FOUR_COLS_CLASS = "four";
        this.FIVE_COLS_CLASS = "five";
        this.SIX_COLS_CLASS = "six";
        this.SEVEN_COLS_CLASS = "seven";
        this.EIGHT_COLS_CLASS = "eight";
        this.NINE_COLS_CLASS = "nine";
        this.TEN_COLS_CLASS = "ten";
        this.MENU_SELECTED = "item-selected";

        this.colClass = "";

        this.$onInit = this.onInit;
        this.$onChanges = this.onInit;
    }
    onInit() {
        switch(this.scholarMenus.length - 1) {
            case 1:
                this.colClass = this.TWO_COLS_CLASS;
                break;
            case 2:
                this.colClass = this.THREE_COLS_CLASS;
                break;
            case 3:
                this.colClass = this.FOUR_COLS_CLASS;
                break;
            case 4:
                this.colClass = this.FIVE_COLS_CLASS;
                break;
            case 5:
                this.colClass = this.SIX_COLS_CLASS;
                break;
            case 6:
                this.colClass = this.SEVEN_COLS_CLASS;
                break;
            case 7:
                this.colClass = this.EIGHT_COLS_CLASS;
                break;
            case 8:
                this.colClass = this.NINE_COLS_CLASS;
                break;
            case 9:
                this.colClass = this.TEN_COLS_CLASS;
                break;
            default:
                this.colClass = this.SIX_COLS_CLASS;
        }
        this.onClickScholarMenu(0);
    }
    onClickScholarMenu(id) {
        if (id != null) {
            // for (let i = 0; i < this.scholarMenus.length; i++) {
            this.scholarMenus.forEach((scholarMenu)=> {
                // let scholarMenu = this.scholarMenus[i];
                if (scholarMenu.id === id) {
                    scholarMenu.class = this.colClass + " " + (angular.isDefined(this.itemSelectedClass) ? this.itemSelectedClass : this.MENU_SELECTED);
                    this.onMenuSelected({id:id});
                } else {
                    scholarMenu.class = this.colClass;
                }
            });
            // }
        }
    }
}

ScholarMenuController.$inject = [];

import template from "./scholar-menu.html";
import "./scholar-menu.scss";

angular.module("webapp")
       .component("scholarMenu", {
           controller: ScholarMenuController,
           templateUrl: template,
           bindings: {
               scholarMenus: "<",
               itemSelectedClass: "<",
               onMenuSelected: "&"
           }
       });
