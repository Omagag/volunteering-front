import angular from "angular";

class ScholarshipHolderService {

    constructor(ClientAPI, Scholar) {
    // constructor($http, Scholar) {
        this.data = {};
        // this._clientApi = new ClientAPI("https://localhost:8082/s");
        this._clientApi = ClientAPI;
        this._clientApi.setUrlBase("http://localhost:8082/s");
        // this.$http= $http;
        this._scholar = new Scholar();

        this.preloadedData = [
            {
                id: 1,
                name: "Juan Perez",
                cause: "Por los que se quedan",
                school: "Universidad",
                address: "Ixtlahuaca, México",
                grade: "1er año",
                campus: "Tec de Mty Campus Mty",
                average: "N/A",
                biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sessions: [
                    {
                        id: 1,
                        status: "Done",
                        date: "14/05/2018",
                        beginHour: "16:30",
                        endHour: "17:30"
                    },
                    {
                        id: 2,
                        status: "Pending for Evaluated",
                        date: "14/05/2018",
                        beginHour: "16:30",
                        endHour: "17:30"
                    },
                    {
                        id: 3,
                        status: "Scheduled",
                        date: "14/05/2018",
                        beginHour: "16:30",
                        endHour: "17:30"
                    },
                    {
                        id: 4,
                        status: "Not Scheduled",
                        date: "14/05/2018",
                        beginHour: "16:30",
                        endHour: "17:30"
                    },
                    {
                        id: 5,
                        status: "Not Done and Evaluated",
                        date: "14/05/2018",
                        beginHour: "16:30",
                        endHour: "17:30"
                    },
                    {
                        id: 6,
                        status: "Done",
                        date: "14/05/2018",
                        beginHour: "16:30",
                        endHour: "17:30"
                    }
                ]
            },
            {
                id: 2,
                name: "Berenice Fuentes",
                cause: "Por los que se quedan",
                school: "Universidad",
                address: "Ixtlahuaca, México",
                grade: "1er año",
                campus: "Tec de Mty Campus Mty",
                average: "8.7",
                biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sessions: [
                    {
                        id: 1,
                        status: "Done"
                    },
                    {
                        id: 2,
                        status: "Pending for Evaluated"
                    },
                    {
                        id: 3,
                        status: "Scheduled"
                    },
                    {
                        id: 4,
                        status: "Not Scheduled"
                    },
                    {
                        id: 5,
                        status: "Not Done and Evaluated"
                    },
                    {
                        id: 6,
                        status: "Done"
                    }
                ]
            },
            {
                id: 3,
                name: "Deborah Sánchez",
                cause: "Por los que se quedan",
                school: "Universidad",
                address: "Ixtlahuaca, México",
                grade: "1er año",
                campus: "Tec de Mty Campus Mty",
                average: "N/A",
                biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sessions: [
                    {
                        id: 1,
                        status: "Done"
                    },
                    {
                        id: 2,
                        status: "Pending for Evaluated"
                    },
                    {
                        id: 3,
                        status: "Scheduled"
                    },
                    {
                        id: 4,
                        status: "Not Scheduled"
                    },
                    {
                        id: 5,
                        status: "Not Done and Evaluated"
                    },
                    {
                        id: 6,
                        status: "Done"
                    }
                ]
            },
            {
                id: 4,
                name: "Pedro Rámirez",
                cause: "Por los que se quedan",
                school: "Universidad",
                address: "Ixtlahuaca, México",
                grade: "1er año",
                campus: "Tec de Mty Campus Mty",
                average: "N/A",
                biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sessions: [
                    {
                        id: 1,
                        status: "Done"
                    },
                    {
                        id: 2,
                        status: "Pending for Evaluated"
                    },
                    {
                        id: 3,
                        status: "Scheduled"
                    },
                    {
                        id: 4,
                        status: "Not Scheduled"
                    },
                    {
                        id: 5,
                        status: "Not Done and Evaluated"
                    },
                    {
                        id: 6,
                        status: "Done"
                    }
                ]
            },
            {
                id: 5,
                name: "Liliana Gutierraz",
                cause: "Por los que se quedan",
                school: "Universidad",
                address: "Ixtlahuaca, México",
                grade: "1er año",
                campus: "Tec de Mty Campus Mty",
                average: "N/A",
                biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                sessions: [
                    {
                        id: 1,
                        status: "Done"
                    },
                    {
                        id: 2,
                        status: "Pending for Evaluated"
                    },
                    {
                        id: 3,
                        status: "Scheduled"
                    },
                    {
                        id: 4,
                        status: "Not Scheduled"
                    },
                    {
                        id: 5,
                        status: "Not Done and Evaluated"
                    },
                    {
                        id: 6,
                        status: "Done"
                    }
                ]
            }
        ];
    }
    getScholarshipHolder(id) {
        // let scholarshipHolder = {};
        // let scholarshipHolder = new Scholar();

        let promise = this._clientApi.get("/ws/scholar/getScholars/" + id).then(
            (data) => {
                // return scholarshipHolder = this._scholar.build(data);
                this.data.scholarshipHolder = this._scholar.build(data);
            }
        );

        // return scholarshipHolder;
    }
    loadList() {
        this.data.scholarshipHolders = this.preloadedData;
    }
}

ScholarshipHolderService.$inject = ["ClientAPI", "Scholar"];
// ScholarshipHolderService.$inject = ["Shttp", "Scholar"];

angular.module("webapp")
    .service("ScholarshipHolderService", ScholarshipHolderService);
    // .factory("ScholarshipHolderService", (ClientAPI, Scholar) => {return ScholarshipHolderService});
