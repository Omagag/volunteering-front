import angular from "angular";

class ClientAPI {
    // constructor(urlBase) {
    //     this.urlBase = urlBase;
    constructor() {
        this.urlBase = "";
    }
    setUrlBase(urlBase) {
        this.urlBase = urlBase;
    }
    get(uri) {
        let url = this.urlBase + uri;
        let headers = new Headers();

        let init = {
            method: "GET",
            headers: headers
        }

        let promise = fetch(url, init).then(
            (response) => {
                return response.json(); // Revisar porque json() regresa una promesa... no un valor??? O_o
            }
        ).catch(
            (error) => {
                console.log(error);
                return error;
            }
        )

        return promise;
    }

    put(uri, id, data) {
        let url = this.urlBase + uri + ("/" + id);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let init = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(data)
        }

        let promise = fetch(url, init).then(
            (response) => {
                return response.json(); // Revisar porque json() regresa una promesa... no un valor??? O_o
            }
        ).catch(
            (error) => {
                console.log(error);
                return error;
            }
        )

        return promise;
    }
    post(uri, data) {
        let url = this.urlBase + uri;
        let headers = new Headers();
        headers.append("Content-Type", "application/json");


        let init = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        }

        let promise = fetch(url, init).then(
            (response) => {
                console.log("Status: " + response.status);
                /*if (response.ok) {
                    return response.json(); // Revisar porque json() regresa una promesa... no un valor??? O_o
                } else {
                    throw response.json();
                }*/
                return response.json(); // Revisar porque json() regresa una promesa... no un valor??? O_o
            }
        ).catch(
            (error) => {
                console.log(error);
                return error;
            }
        )

        return promise;
    }
    delete(uri, id, data) {
        let url = this.urlBase + uri + ("/" + id)
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let init = {
            method: "DELETE",
            headers: headers,
            body: JSON.stringify(data)
        }

        let promise = fetch(url, init).then(
            (response) => {
                if (response.ok) {
                    return true;
                }else {
                    return false;
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                //return error;
                return false;
            }
        )

        return promise;
    }
}

angular.module("webapp").service("ClientAPI", ClientAPI);
// angular.module("webapp").factory("ClientAPI", function(){return ClientAPI});
