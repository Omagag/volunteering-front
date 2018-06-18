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
        this.scholars = [];
        this.sessions = [];


        this.person = new Person();
        this.employee = new Employee();
    }
}

class Person {
    constructor() {
        this.name = "";
        this.lastName = "";
        this.secondLastName = "";
        this.age = 0;
        this.gender = "";
        this.job = "";
        this.birthday = "";

        this.address = new Address();
        this.telephone = new Telephone();
        this.schooling = new Schooling();
    }
}

class Employee {
    constructor() {
        this.employeeNumber = "";
        this.institutionalMail = "";
        this.jobSeniority = "";
        this.regionalCenter = "";
        this.employeeLocation = "";
        this.division = "";
        this.officeDepartment = "";

        this.officeAddress = new Address();
    }
}

class Telephone {
    constructor() {
        this.cellPhoneNumber = "";
        this.cellPhoneRegionalCode = "";
        this.officePhone = "";
        this.telephoneExtension = "";
        this.officePhoneRegionalCode = "";
    }
}

class Address {
    constructor() {
        this.fullAddress = "";
        this.municipality = ""; // Strange name...

        this.state = new State();
        this.region = new Region();
    }
}

class State {
    constructor() {
        this.name = "";
    }
}

class Region {
    constructor() {
        this.name = "";
    }
}

class Schooling {
    constructor() {
        this.schoolGrade = "";
        this.universityName = "";
        this.career = "";
    }
}

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
    constructor() {
        this.id = "";
        this.person = new Person();
    }
}

class Pagination {
    constructor() {
        this.paginationKey = "";
        this.recordNumber = "";
        this.totalRegisters = 0;
    }
}

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
