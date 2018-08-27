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
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
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
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let persons = [];
        array.forEach((data)=>{
            persons.push(Person.build(data));
        });
        return persons;
    }
}
Person.$inject = ["Address", "Telephone", "Schooling"];
angular.module("webapp").factory("Person", (Address, Telephone, Schooling)=>{return Person});

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

class Scholar {
    constructor(id, schooling, biography, person, scholarshipProgram) {
        this.id = id;
        this.schooling = schooling;
        this.biography = biography;
        this.person = person;
        this.scholarshipProgram = scholarshipProgram;
        // this.mentor = mentor; // We theoretically mustn't use this field.
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new Scholar(
            // TODO: Replace for the correct names in the service
            data.id,
            Schooling.build(data.schooling),
            Biography.build(data.biography),
            Person.build(data.person),
            OptionList.buildArray(data.scholarshipProgram) // This must build an Array!!!
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let scholars = [];
        array.forEach((data)=>{
            scholars.push(Scholar.build(data));
        });
        return scholars;
    }
}
Scholar.$inject = ["Person"];
angular.module("webapp").factory("Scholar", (Person)=>{return Scholar});

class Schooling {
    constructor(universityName, schoolLevel, schoolName, career, academicAverage) {
        this.universityName = universityName;
        this.schoolLevel = schoolLevel;
        this.schoolName = schoolName;
        this.career = career;
        this.academicAverage = academicAverage;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new Schooling(
            // TODO: Replace for the correct names in the service
            data.universityName,
            data.schoolLevel,
            data.schoolName,
            data.career,
            data.academicAverage
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let schoolings = [];
        array.forEach((data)=>{
            schoolings.push(Schooling.build(data));
        });
        return schoolings;
    }
}
angular.module("webapp").factory("Schooling", function(){return Schooling});

class Biography {
    constructor(aboutMe, personalInterests) {
        this.aboutMe = aboutMe;
        this.personalInterests = personalInterests;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new Biography(
            // TODO: Replace for the correct names in the service
            data.aboutMe,
            OptionList.buildArray(data.personalInterests) // This must build an Array!!!
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let biographies = [];
        array.forEach((data)=>{
            biographies.push(Biography.build(data));
        });
        return biographies;
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
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new Telephone(
            // TODO: Replace for the correct names in the service
            data.cellPhoneNumber,
            data.cellPhoneRegionalCode,
            data.officePhone,
            data.telephoneExtension,
            data.officePhoneRegionalCode
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let telephones = [];
        array.forEach((data)=>{
            telephones.push(Telephone.build(data));
        });
        return telephones;
    }
}
angular.module("webapp").factory("Telephone", function(){return Telephone});

class Address {
    constructor(fullAddress, municipality, state, region) {
        this.fullAddress = fullAddress;
        this.municipality = municipality; // Strange name...

        this.state = state;
        this.region = region;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new Address(
            // TODO: Replace for the correct names in the service
            data.fullAddress,
            data.municipality,
            State.build(data.state),
            Region.build(data.region)
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let addresses = [];
        array.forEach((data)=>{
            addresses.push(Address.build(data));
        });
        return addresses;
    }
}
angular.module("webapp").factory("Address", function(State, Region){return Address});

class State {
    constructor() {
        this.name = "";
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new State(
            // TODO: Replace for the correct names in the service
            data.name
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let states = [];
        array.forEach((data)=>{
            states.push(State.build(data));
        });
        return states;
    }
}
angular.module("webapp").factory("State", function(){return State});

class Region {
    constructor() {
        this.name = "";
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new Region(
            // TODO: Replace for the correct names in the service
            data.name
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let regions = [];
        array.forEach((data)=>{
            regions.push(Region.build(data));
        });
        return regions;
    }
}
angular.module("webapp").factory("Region", function(){return Region});

class OptionList {
    constructor(id, description, status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new Region(
            // TODO: Replace for the correct names in the service
            data.id,
            data.description,
            data.status
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let optionLists = [];
        array.forEach((data)=>{
            optionLists.push(OptionList.build(data));
        });
        return optionLists;
    }
}
angular.module("webapp").factory("OptionList", function(){return OptionList});

class TechnicalDate {
    constructor() {
        this.message = "";
    }
}

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

class Student {
    constructor(name, firstName, lastName, schoolData, scholarBiography, programScholar, contactInf) {
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.schoolData = schoolData;
        this.scholarBiography = scholarBiography;
        this.programScholar = programScholar;
        this.contactInf = contactInf;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new Student(
            // TODO: Replace for the correct names in the service
            data.name,
            data.firstName,
            data.lastName,
            SchoolData.buildArray(data.schoolData),
            ScholarBiography.buildArray(data.scholarBiography),
            ProgramScholar.buildArray(data.programScholar),
            ContactInfo.buildArray(data.contactInf)
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let students = [];
        array.forEach((data)=>{
            students.push(Student.build(data));
        });
        return students;
    }
}
Student.$inject = ["School", "ScholarBiography", "ProgramScholar", "ContactInfo"];
angular.module("webapp").factory("Student", function(School, ScholarBiography, ProgramScholar, ContactInfo){return Student});

class School {
    constructor(name) {
        this.name = name;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new School(
            // TODO: Replace for the correct names in the service
            data.name
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let schools = [];
        array.forEach((data)=>{
            schools.push(School.build(data));
        });
        return schools;
    }
}
angular.module("webapp").factory("School", function(){return School});

class SchoolData {
    constructor(school) {
        this.school = school;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new SchoolData(
            // TODO: Replace for the correct names in the service
            School.buildArray(data.school)
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let schoolDatas = [];
        array.forEach((data)=>{
            schoolDatas.push(SchoolData.build(data));
        });
        return schoolDatas;
    }
}
SchoolData.$inject = ["School"];
angular.module("webapp").factory("SchoolData", function(School){return SchoolData});

class ProgramScholar {
    constructor(schoolGrade) {
        this.schoolGrade = schoolGrade;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new ProgramScholar(
            // TODO: Replace for the correct names in the service
            data.schoolGrade
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let programScholars = [];
        array.forEach((data)=>{
            programScholars.push(ProgramScholar.build(data));
        });
        return programScholars;
    }
}
angular.module("webapp").factory("ProgramScholar", function(){return ProgramScholar});

class ScholarBiography {
    constructor(scholarLevel, levelAverage, biography, interest) {
        this.scholarLevel = scholarLevel;
        this.levelAverage = levelAverage;
        this.biography = biography;
        this.interest = interest;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new ScholarBiography(
            // TODO: Replace for the correct names in the service
            data.scholarLevel,
            data.levelAverage,
            data.biography,
            data.interest
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let scholarBiographies = [];
        array.forEach((data)=>{
            scholarBiographies.push(ScholarBiography.build(data));
        });
        return scholarBiographies;
    }
}
ScholarBiography.$inject = ["OptionList"];
angular.module("webapp").factory("ScholarBiography", function(OptionList){return ScholarBiography});


class ContactInfo {
    constructor(cellPhone, homePhone, email) {
        this.cellPhone = cellPhone;
        this.homePhone = homePhone;
        this.email = email;
    }
    static build(data) {
        if (angular.isUndefined(data)) {
            return;
        }
        return new ContactInfo(
            // TODO: Replace for the correct names in the service
            data.cellPhone,
            data.homePhone,
            data.email
        );
    }
    static buildArray(array) {
        if (angular.isUndefined(array)) {
            return;
        }
        let contactInfos = [];
        array.forEach((data)=>{
            contactInfos.push(ContactInfo.build(data));
        });
        return contactInfos;
    }
}
angular.module("webapp").factory("ContactInfo", function(){return ContactInfo});
