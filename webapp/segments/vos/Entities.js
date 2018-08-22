import angular from "angular";

class Mentor {
    constructor() {
        this.id = "";
        this.aboutMe = "";
        this.mentorSeniority = "";
        this.photoId = "";
        this.status = "";
        this.entryProgramDate = ""; // Date
        this.exitProgramDate = ""; // Date
        this.introductionDate = ""; // Date
        this.introductoryCourse = "";
        this.onlineFormation = "";


        this.proficiencies = [];
        this.pesonalInterests = [];
        this.mentoringLevels = [];
        this.scholarshipPrograms = [];
        this.activityTypes = [];
        // this.scholars = [];
        // this.sessions = [];


        this.person = new Person();
        this.employee = new Employee();
    }
}

class Person {
    constructor(name, lastName, secondLastName, age, gender, job,
                birthday, address, telephone, schooling) {
        this.name = name;
        this.lastName = lastName;
        this.secondLastName = secondLastName;
        this.age = age;
        this.gender = gender;
        this.job = job;
        this.birthday = birthday;
        this.address = address;
        this.telephone = telephone;
        this.schooling = schooling;
    }
    build(data) {
        return new Person(
            // TODO: Replace for the correct names in the service
            data.name,
            data.lastName,
            data.secondLastName,
            data.age,
            data.gender,
            data.job,
            data.birthday,
            Address.build(data.address),
            Telephone.build(data.telephone),
            Schooling.build(data.schooling)
        );
    };
}
angular.module("webapp").factory("Person", function(Address, Telephone, Schooling){return Person});

class Employee {
    constructor() {
        this.employeeNumber = "";
        this.institutionalMail = "";
        this.jobSeniority = 0; //Hoja Paas: el tipo de dato es: Number en el json es String.
        this.regionalCenter = "";
        this.employeeLocation = "";
        this.division = "";
        this.officeDepartment = "";
        // this.officeAddress = new Address();
    }
}

class Telephone {
    constructor(cellPhoneNumber, cellPhoneRegionalCode, officePhone, telephoneExtension, officePhoneRegionalCode) {
        this.cellPhoneNumber = cellPhoneNumber;
        this.cellPhoneRegionalCode = cellPhoneRegionalCode;
        this.officePhone = officePhone;
        this.telephoneExtension = telephoneExtension;
        this.officePhoneRegionalCode = officePhoneRegionalCode;
    }
    build(data) {
        return new Telephone(
            // TODO: Replace for the correct names in the service
            data.cellPhoneNumber,
            data.cellPhoneRegionalCode,
            data.officePhone,
            data.telephoneExtension,
            data.officePhoneRegionalCode
        );
    };
}
angular.module("webapp").factory("Telephone", function(){return Telephone});

class Address {
    constructor(fullAddress, municipality, state, region) {
        this.fullAddress = fullAddress;
        this.municipality = municipality; // Strange name...

        this.state = state;
        this.region = region;
    }
    build(data) {
        return new Address(
            // TODO: Replace for the correct names in the service
            data.fullAddress,
            data.municipality,
            State.build(data.state),
            Region.build(data.region)
        );
    };
}
angular.module("webapp").factory("Address", function(State, Region){return Address});

class State {
    constructor() {
        this.name = "";
    }
    build(data) {
        return new State(
            // TODO: Replace for the correct names in the service
            data.name
        );
    };
}
angular.module("webapp").factory("State", function(){return State});

class Region {
    constructor() {
        this.name = "";
    }
    build(data) {
        return new Region(
            // TODO: Replace for the correct names in the service
            data.name
        );
    };
}
angular.module("webapp").factory("Region", function(){return Region});

class Schooling {
    constructor(schoolLevel, schoolName, career, academicAverage) {
        this.schoolLevel = schoolLevel;
        this.schoolName = schoolName;
        this.career = career;
        this.academicAverage = academicAverage;
    }
    build(data) {
        return new Schooling(
            // TODO: Replace for the correct names in the service
            data.schoolLevel,
            data.schoolName,
            data.career,
            data.academicAverage
        );
    };
}
angular.module("webapp").factory("Schooling", function(){return Schooling});

class OptionList {
    constructor() {
        this.id = "";
        this.description = "";
        this.status = "";
    }
}

class TechnicalDate {
    constructor() {
        this.message = "";
    }
}

class Scholar {
    constructor(id, person, scholarshipProgram) {
        this.id = id;
        this.person = person;
        this.scholarshipProgram = scholarshipProgram;
    }
    build(data) {
        return new Scholar(
            // TODO: Replace for the correct names in the service
            data.id,
            Person.build(data.person),
            data.scholarshipProgram
        );
    };
}
Scholar.$inject = ["Person"];
angular.module("webapp").factory("Scholar", function(Person){return Scholar});

// class Pagination {
//     constructor() {
//         this.paginationKey = "";
//         this.recordNumber = "";
//         this.totalRegisters = 0;
//     }
// }

class Session {
    constructor() {
        this.id = ""; // Type?
        this.name = ""; // Type?
        this.date = ""; // Type?
        this.hour = ""; // Type?
        this.status = ""; // Type?
        this.actionType = ""; // Type?
    }
}

class SchoolLevel{
    constructor(){
        this.id="";
        this.description="";
        this.status="";
        this.schoolGrades = []
    }
}

class SchoolGrade{
    constructor(){
        this.id="";
        this.description="";
        this.sessions=[]

    }
}

class SHSession {
    constructor(){
        this.id="";
        this.description="";
    }
}

class ScheduledSession{
    constructor(){
        this.id="";
        this.activity="";
        this.activitystatus="";
        this.scholars="";
        this.date="";
        this.horary="";
        this.status="";
        this.rescheduleNumber=0;

        this.session= new SHSession();
        this.comments="";
        this.lastSessionDate="";
    }
}