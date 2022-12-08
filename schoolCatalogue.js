class school {
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name () {
      return this._name;
    }
    get name () {
      return this._level;
    }
    get name () {
      return this._numberOfStudents;
    }
    set numberOfStudents (num){
      if (num.isNaN()){
        console.log ('Invalid input: numberOfStudents must be set to a Number.');
      }else{
        this._numberOfStudents = num;
      }
    }
    quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher (substituteTeachers){
    const teacherInt = Math.floor(Math.random()*substituteTeachers.length)
    return substituteTeachers[teacherInt]
  }
  }
  class primarySchool extends school {
    constructor (name, numberOfStudents, pickupPolicy){
      super (name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
      return this.pickupPolicy;
    }
  }
  class highSchool extends school {
    constructor(name, numberOfStudents, sportsTeams){
      super (name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new primarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  
  const sub = school.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new highSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);