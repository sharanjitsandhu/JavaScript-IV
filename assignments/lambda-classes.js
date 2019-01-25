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
    PRAssignment(subject) {
        return `${figg.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }


}

class ProjectManager extends Instructor {
    constructor(gGChildAttributes) {
        super(gGChildAttributes);
        this.gradClassNAme = gGChildAttributes.gradClassNAme;
        this.favInstructor = gGChildAttributes.favInstructor;

    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
        
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const bill = new ProjectManager({
    name: 'Bill',
    location: 'Michigan',
    age: 32,
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'Luis',
    favLanguage: 'JavaScript',
    specialty: 'Auth',
    catchPhrase: 'Redux Rocks!'
  });

  const figg = new Student({
    name: 'Figgy',
    location: 'Charleston',
    age: 37,
    gender: 'male',
    previousBackground: 'Fork Lift Operator',
    className: 'CS11',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });


  console.log(fred.speak());
  console.log(fred.demo('variables'));
  console.log(fred.grade(figg, 'redux'));
  
  console.log(figg.speak());
  console.log(figg.listsSubjects());
  console.log(figg.PRAssignment('Redux'));
  console.log(figg.sprintChallenge('Pre-proccessing'));
  
  console.log(bill.speak());
  console.log(bill.demo('Redux'));
  console.log(bill.grade(figg, 'const vs let'));
  console.log(bill.debugsCode(figg, 'DS-Algos'));
  console.log(bill.standUp('#Code-Allstars'));