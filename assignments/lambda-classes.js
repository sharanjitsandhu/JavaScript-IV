// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender =attributes.gender;
}
speak() {
  return `Hello my name is ${this.name}, I am from ${this.location}`;
}
}

class Instructor extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.specialty = childAttributes.specialty;
        this.favLanguage = childAttributes.favLanguage;
        this.catchPhrase = childAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


class Student extends Person {
    constructor(gChildAttributes) {
        super(gChildAttributes);
        this.previousBackground = gChildAttributes.previousBackground;
        this.className = gChildAttributes.className;
        this.favSubjects = gChildAttributes.favSubjects;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            return `${this.name} ${this.favSubjects[i]}`;
          }
    }
    PRAssignment() {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }


}

class ProjectManager extends Instructor {
    constructor(gGChildAttributes) {
        super(gGChildAttributes);
        this.gradClassNAme = gGChildAttributes.gradClassNAme;
        this.favInstructor = gGChildAttributes.favInstructor;

    }
    standUp(Cchannel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
        
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Person ({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    
});

const josh = new Instructor ({
    specialty: 'redux',
    favLanguage: `JavaScript, Python, Elm etc`,
    catchPhrase: `Don't forget the homies`,
    
    }
)

const sharan = new Student ({
    previousBackground: 'Digital Marketing',
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
});

const mikaela = new ProjectManager ({
    gradClassNAme: 'CS1',
    favInstructor: 'Sean',
});



    // console.log(mage.createdAt); 
    // console.log(archer.dimensions); 
    // console.log(swordsman.healthPoints); 
    // console.log(mage.name);
    // console.log(swordsman.team);
    // console.log(mage.weapons); 
    // console.log(archer.language);
    // console.log(archer.greet()); 
    // console.log(mage.takeDamage());
    // console.log(swordsman.destroy());

    console.log(fred.speak()); //Hello my name is Fred, I am from Bedrock
    console.log(sharan.listsSubjects());
    
