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

        this.ITEM_DISABLED="item-disabled";

        this.colClass = "";

        this.$onInit = this.onInit;
        this.$onChanges = this.onInit;
    }
    onInit() {
        if (angular.isDefined(this.scholarMenus)) {
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

            // This will initialize the Menu with a default value, if it's zero any element will be selected.
            if (angular.isDefined(this.itemIdByDefault) && this.itemIdByDefault !== 0) {
                this.onClickScholarMenu(this.itemIdByDefault);
            } else {
                this.onClickScholarMenu(0);
            }
        }
    }

    onClickScholarMenu(id) {
        if (id != null) {
            // for (let i = 0; i < this.scholarMenus.length; i++) {
            this.scholarMenus.forEach((scholarMenu)=> {
                // let scholarMenu = this.scholarMenus[i];
                if (scholarMenu.id === id) {
                    scholarMenu.class = this.colClass + " " + (angular.isDefined(this.itemSelectedClass) ? this.itemSelectedClass : this.MENU_SELECTED);

                    // Invokes the function injected when the option is selected.
                    this.onMenuSelected({id:id});
                } else {
                    scholarMenu.class = this.colClass + " " + this.ITEM_DISABLED;
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
               scholarMenus: "<", // Array use to fill the Menus with the "id" and "name".
               itemIdByDefault: "<", // This will select the menu with the "id" introduced, if it's empty will no select nothing.
               itemSelectedClass: "<", // Custom class for give style at the menu selected.
               itemDefaultClass: "<", // variable para cambiar el color de fondo del menu de sesiones
               onMenuSelected: "&" // Function that will be invoked when any menu has been selected. The function will be receive the parameter "id".
           }
       });
