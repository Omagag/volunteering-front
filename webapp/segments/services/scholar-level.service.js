import angular from "angular";

class ScholarLevelService {

    constructor() {
        this.data = {};
    }

    getScholarLevels() {
        this.data.scholarLevels = [
            {
                id: 1,
                name: "Secundaria"
            },
            {
                id: 2,
                name: "Preparatoria"
            },
            {
                id: 3,
                name: "Universidad"
            }
        ]
    }

    getScholarGrades(id) {
        // this.data.scholarGrades = [
         let scholarGrades = [
            {
                scholarId: 1,
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
                scholarId: 2,
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
                scholarId: 3,
                name: "Universidad",
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
        ];
        scholarGrades.forEach((scholarGrade)=>{
            if (scholarGrade.scholarId === id) {
                this.data.scholarGrades=scholarGrade.scholarGrades;
            }
        });
    }

    getSessiosBy(id) {
        // this.data.sessions = [
        let scholarSessions = [
            {
                gradeId: 1,
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
                gradeId: 2,
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
                gradeId: 3,
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
                gradeId: 4,
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
                gradeId: 5,
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
                gradeId: 6,
                scholarSessions: [
                    {id: 1, name: "Session 1"},
                    {id: 2, name: "Session 2"},
                    {id: 3, name: "Session 3"},
                    {id: 4, name: "Session 4"}
                ]
            },
            {
                gradeId: 7,
                scholarSessions: [
                    {id: 1, name: "Session 1"},
                    {id: 2, name: "Session 2"},
                    {id: 3, name: "Session 3"},
                    {id: 4, name: "Session 4"}
                ]
            },
            {
                gradeId: 8,
                scholarSessions: [
                    {id: 1, name: "Session 1"},
                    {id: 2, name: "Session 2"},
                    {id: 3, name: "Session 3"},
                    {id: 4, name: "Session 4"}
                ]
            },
            {
                gradeId: 9,
                scholarSessions: [
                    {id: 1, name: "Session 1"},
                    {id: 2, name: "Session 2"},
                    {id: 3, name: "Session 3"},
                    {id: 4, name: "Session 4"}
                ]
            },
            {
                gradeId: 10,
                scholarSessions: [
                    {id: 1, name: "Session 1"},
                    {id: 2, name: "Session 2"},
                    {id: 3, name: "Session 3"},
                    {id: 4, name: "Session 4"}
                ]
            }
        ];
        scholarSessions.forEach((scholarSession)=>{
            if(scholarSession.gradeId=== id){
                this.data.scholarSessions = scholarSession.scholarSessions;
            }
        });
    }
}

angular.module("webapp")
    .service("ScholarLevelService", ScholarLevelService);
