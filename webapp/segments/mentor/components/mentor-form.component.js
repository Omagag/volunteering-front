import angular from "angular";

class MentorFormController {
    
    constructor(){
        this.showHideContent("encabezado", "datos", 0, "show", 4);
    }
    showHideContent(headerId, dataId, index, action, total) {
        let headerDiv;
        let dataDiv;
        let h4;
        let classNameHead = "accordion-header";
        let classNameSelectedHead = "selected-head";
        let classNameData = "accordion-container";
        let classNameSelectedData = "show-container";
        let classNameExpanded = "expanded";
        let classNameCollapsed = "img-name-section";

        for(let i = 0; i < total; i++) {
            headerDiv = document.getElementById(headerId + i);
            dataDiv = document.getElementById(dataId + i);
            h4 = document.getElementById("actionIcon" + i);

            if(i === index) {

                if(action === "show") {
                    // headerDiv.setAttribute("onclick", "showHideContent('" + headerId + "', '" + dataId + "', " + index + ", 'hide', " + total + ")");
                    headerDiv.onclick = ()=>{
                        this.showHideContent(headerId, dataId, index, "hide",total)
                    };
                    headerDiv.className = classNameHead + " " + classNameSelectedHead;
                    dataDiv.className = classNameData + " " + classNameSelectedData;
                    h4.className = classNameCollapsed + " " + classNameExpanded;
                } else {
                    // headerDiv.setAttribute("onclick", "showHideContent('"+headerId+"', '"+dataId+"', "+index+", 'show', "+total+")");
                    headerDiv.onclick = ()=>{
                        this.showHideContent(headerId, dataId, index, "show",total)
                    };
                    headerDiv.className = classNameHead;
                    dataDiv.className = classNameData;
                    h4.className =  classNameCollapsed;
                }
            } else {
                // headerDiv.setAttribute("onclick", "showHideContent('"+headerId+"', '"+dataId+"', "+ i +", 'show', "+total+")");
                headerDiv.onclick = ()=>{
                    this.showHideContent(headerId, dataId, i, "show",total)
                };
                headerDiv.className = classNameHead;
                dataDiv.className = classNameData;
                h4.className =  classNameCollapsed;
            }
        }
    }

}

MentorFormController.$inject = [];

import template from "./mentor-form.html";

angular.module("webapp")
       .component("mentorForm", {
           controller: MentorFormController,
           templateUrl: template,
           bindings: {
           }
       });
