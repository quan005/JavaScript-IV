// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(addInfo) {
    super(addInfo);
    this.specialty = addInfo.specialty;
    this.favLanguage = addInfo.favLanguage;
    this.catchPhrase = addInfo.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(stuInfo) {
    super(stuInfo);
    this.previousBackground = stuInfo.previousBackground;
    this.className = stuInfo.className;
    this.favSubjects = stuInfo.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects.forEach(subject => console.log(`${subject}`));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun the sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmInfo) {
    super(pmInfo);
    this.gradClassName = pmInfo.gradClassName;
    this.favInstructor = pmInfo.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to @${channel}, standy time!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.'`
  }
}


// --Instructors-- //
const jayZ = new Instructor({
  name: 'Shawn',
  location: 'Brooklyn',
  age: 49,
  gender: 'male',

  favLanguage: 'JavaScript',
  specialty: 'Business',
  catchPhrase: `Hov is in the buildin. `
});

const nas = new Instructor({
  name: 'Nasir',
  location: 'Crown Heights',
  age: 45,
  gender: 'male',

  favLanguage: 'Python',
  specialty: 'African culture',
  catchPhrase: `All I need is one mic.`
});

// --Students-- //
const jCole = new Student({
  name: 'Jermaine',
  location: 'Fayetteville',
  age: 34,
  gender: 'male',

  previousBackground: 'College Student',
  className: 'CSPT2',
  favSubjects: ['HTML', 'Java', 'Javascript', 'React'],
});

const kDot = new Student({
  name: 'Kendrick',
  location: 'Compton',
  age: 31,
  gender: 'male',

  previousBackground: 'Poet',
  className: 'CSPT2',
  favSubjects: ['Python', 'Javascript', 'MySql', 'React'],
});

// --Project Managers-- //
const yonce = new ProjectManager({
  name: 'Beyonce',
  location: 'Houston',
  age: 37,
  gender: 'female',

  gradClassName: 'CS1',
  favInstructor: 'Michael',
});

const riri = new ProjectManager({
  name: 'rihanna',
  location: 'Barbados',
  age: 31,
  gender: 'female',

  gradClassName: 'CS5',
  favInstructor: 'Madonna',
});

// <<<<<< Instructor Methods >>>>>> //

console.log(jayZ.speak());
console.log(jayZ.demo('Data Structures'));
console.log(jayZ.grade(kDot, 'React'));

console.log(nas.speak());
console.log(nas.demo('Django'));
console.log(nas.grade(jCole, 'Java'));


// <<<<<< Students Methods >>>>>> //

console.log(kDot.speak());
console.log(kDot.listsSubjects());
console.log(kDot.PRAssignment('Python'));
console.log(kDot.sprintChallenge('Python'));

console.log(jCole.speak());
console.log(jCole.listsSubjects());
console.log(jCole.PRAssignment('React'));
console.log(jCole.sprintChallenge('React'));

// <<<<<< Project Manager Methods >>>>>> //

console.log(yonce.speak());
console.log(yonce.standUp('webpt5'));
console.log(yonce.debugsCode(jCole, 'Python'));

console.log(riri.speak());
console.log(riri.standUp('webpt5'));
console.log(riri.debugsCode(kDot, 'React'));
