export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('length must be a number');
    }
    if ((students.constructor !== 'Array') && (students.every((i) => typeof i !== 'string'))) {
      throw TypeError('students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  getName() {
    return this._name;
  }

  setName(new_name) {
    if (typeof new_name === 'string') {
      this._name = new_name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  getLength() {
    return this._length;
  }

  setLength(new_length) {
    if (typeof (new_length) === 'number') {
      this._length = new_length;
    } else {
      TypeError('length must be a number');
    }
  }

  getStudents() {
    return this._students;
  }

  setStudents(new_students) {
    if ((students.constructor !== 'Array') && (students.every((i) => typeof i !== 'string'))) {
      this._students = new_students;
    } else {
      TypeError('stdents must be an array of strings');
    }
  }
}
