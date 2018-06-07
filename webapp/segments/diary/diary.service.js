import angular from "angular";

class DiaryService {

    constructor(){
        this.data = {};
    }
    loadSessions() {
        // TODO: Temporal...
        this.data.sessions = [
            {
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
                status: "EVALUATED",
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
}

angular.module("webapp")
    .service("DiaryService", DiaryService);
