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
                        name: "1er Grado",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"},
                            {id: 5, name: "Session 5"},
                            {id: 6, name: "Session 6"},
                            {id: 7, name: "Session 7"},
                            {id: 8, name: "Session 8"},
                            {id: 9, name: "Session 9"},
                            {id: 10, name: "Session 10"},
                            {id: 11, name: "Session 11"},
                            {id: 12, name: "Session 12"}
                        ]
                    },
                    {
                        id: 2,
                        name: "2o Grado",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"},
                            {id: 5, name: "Session 5"},
                            {id: 6, name: "Session 6"},
                            {id: 7, name: "Session 7"},
                            {id: 8, name: "Session 8"},
                            {id: 9, name: "Session 9"},
                            {id: 10, name: "Session 10"},
                            {id: 11, name: "Session 11"},
                            {id: 12, name: "Session 12"}
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Preparatoria",
                scholarGrades: [
                    {
                        id: 3,
                        name: "1 año",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"},
                            {id: 5, name: "Session 5"},
                            {id: 6, name: "Session 6"}
                        ]
                    },
                    {
                        id: 4,
                        name: "2 año",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"},
                            {id: 5, name: "Session 5"},
                            {id: 6, name: "Session 6"}
                        ]
                    },
                    {
                        id: 5,
                        name: "3 año",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"},
                            {id: 5, name: "Session 5"},
                            {id: 6, name: "Session 6"}
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: "Licenciatura",
                scholarGrades: [
                    {
                        id: 6,
                        name: "1 año",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"}
                        ]
                    },
                    {
                        id: 7,
                        name: "2 año",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"}
                        ]
                    },
                    {
                        id: 8,
                        name: "3 año",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"}
                        ]
                    },
                    {
                        id: 9,
                        name: "4 año",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"}
                        ]
                    },
                    {
                        id: 10,
                        name: "5 año",
                        scholarSessions: [
                            {id: 1, name: "Session 1"},
                            {id: 2, name: "Session 2"},
                            {id: 3, name: "Session 3"},
                            {id: 4, name: "Session 4"}
                        ]
                    }
                ]
            }
        ]
    }

}

angular.module("webapp")
    .service("ScholarLevelService", ScholarLevelService);
