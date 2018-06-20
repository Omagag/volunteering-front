import angular from "angular";

class DiaryService {

    constructor(){
        this.data = {};
    }
    loadSessions() {
        // TODO: Temporal...
        this.data.sessions = [
            {
                date: "01/06/2018",
                status: "SCHEDULED",
                scholarshipHolders: [
                    {
                        id: 1,
                        name: "Juan Perez"
                    },
                    {
                        id: 2,
                        name: "Berenice Fuentes"
                    },
                    {
                        id: 3,
                        name: "Deborah Sánchez"
                    },
                    {
                        id: 4,
                        name: "Pedro Rámirez"
                    }

                ]
            },
            {
                date: "01/05/2018",
                status: "PENDING TO EVALUATE",
                scholarshipHolders: [
                    {
                        id: 1,
                        name: "Juan Perez"
                    },
                    {
                        id: 2,
                        name: "Berenice Fuentes"
                    },
                    {
                        id: 3,
                        name: "Deborah Sánchez"
                    },
                    {
                        id: 4,
                        name: "Pedro Rámirez"
                    }

                ]
            }
        ];
        this.data.sessionsHistorical = [
            {
                date: "01/06/2018",
                status: "CANCELED",
                scholarshipHolders: [
                    {
                        id: 1,
                        name: "Juan Perez"
                    },
                    {
                        id: 2,
                        name: "Berenice Fuentes"
                    },
                    {
                        id: 3,
                        name: "Deborah Sánchez"
                    },
                    {
                        id: 4,
                        name: "Pedro Rámirez"
                    }

                ]
            },
            {
                date: "01/06/2018",
                status: "EVALUATED",
                scholarshipHolders: [
                    {
                        id: 1,
                        name: "Juan Perez",
                        evaluation: {
                            score: 4,
                            comment: "Pudo ser más acertado en sus comentarios."
                        }
                    },
                    {
                        id: 2,
                        name: "Berenice Fuentes",
                        evaluation: {
                            score: 3,
                            comment: "Muy buena participación."
                        }
                    },
                    {
                        id: 3,
                        name: "Deborah Sánchez",
                        evaluation: {
                            score: 5,
                            comment: "Debe mejorar sus habilidades de estudio y atención."
                        }
                    },
                    {
                        id: 4,
                        name: "Pedro Rámirez",
                        evaluation: {
                            score: 1,
                            comment: "Debe de considerarse su continuidad en la Fundación."
                        }
                    }

                ]
            },
            {
                date: "01/06/2018",
                status: "SCHEDULED AGAIN",
                scholarshipHolders: [
                    {
                        id: 1,
                        name: "Juan Perez"
                    },
                    {
                        id: 2,
                        name: "Berenice Fuentes"
                    },
                    {
                        id: 3,
                        name: "Deborah Sánchez"
                    },
                    {
                        id: 4,
                        name: "Pedro Rámirez"
                    }

                ]
            }
        ];
    }

    get(id) {
        this.preloadedData.forEach((scholarshipHolder) => {
            if (scholarshipHolder.id === id) {
                this.data.scholarshipHolder = scholarshipHolder;
            }
        });
    }


    loadList() {
        this.data.scholarshipHolders = this.preloadedData;
    }
}




angular.module("webapp")
    .service("DiaryService", DiaryService);
