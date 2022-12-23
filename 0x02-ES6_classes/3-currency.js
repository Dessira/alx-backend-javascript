export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get Curcode() {
    return this._code;
  }

  set Curcode(new_code) {
    this._code = new_code;
  }

  get Curname() {
    return this._name;
  }

  set Curname(new_name) {
    this._name = new_name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
