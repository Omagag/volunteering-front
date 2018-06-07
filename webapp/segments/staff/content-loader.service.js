import angular from "angular";

class ContentLoaderService {

    constructor() {
        this.data = {};
    }

    getAvailableOptions() {
        this.data.availableOptions = [
            {id: 0, name: "Seleccione una opción de carga"},
            {id: 1, name: "URL"},
            {id: 2, name: "Archivo word"},
            {id: 3, name: "Archivo Excel"},
            {id: 4, name: "Presentación Power Point"},
        ]
    }


}

angular.module("webapp")
    .service("ContentLoaderService", ContentLoaderService);
