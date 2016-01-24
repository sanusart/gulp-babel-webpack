export default class Person {

  constructor(...args) {
    this.name = args[0];
    this.age = args[1];
    this.fullName = args[2];
  }

  theName() {
    return this.name;
  }

  theAge() {
    return this.age;
  }

  theFullNmae() {
    return this.fullName;
  }

}
