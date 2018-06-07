import angular from "angular";

class ScholarLevelService {

    constructor(){
        this.data = {};
    }
    getScholarLevels() {
        this.data.scholarLevels = [
            {
                id: 1,
                name: "Secundaria",
                scholarGrades: [
                    {
                        id: 1,
                        name: "1er Grado"
                    },
                    {
                        id: 2,
                        name: "2o Grado"
                    }
                ]
            },
            {
                id: 2,
                name: "Preparatoria",
                scholarGrades: [
                    {
                        id: 3,
                        name: "1 año"
                    },
                    {
                        id: 4,
                        name: "2 año"
                    },
                    {
                        id: 5,
                        name: "3 año"
                    }
                ]
            },
            {
                id: 3,
                name: "Licenciatura",
                scholarGrades: [
                    {
                        id: 6,
                        name: "1 año"
                    },
                    {
                        id: 7,
                        name: "2 año"
                    },
                    {
                        id: 8,
                        name: "3 año"
                    },
                    {
                        id: 9,
                        name: "4 año"
                    },
                    {
                        id: 10,
                        name: "5 año"
                    }
                ]
            }
        ]
    }

}

angular.module("webapp")
    .service("ScholarLevelService", ScholarLevelService);
