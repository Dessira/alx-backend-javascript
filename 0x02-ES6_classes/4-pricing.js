import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._code;
  }

  set amount(new_amount) {
    this._amount = new_amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(new_currency) {
    if (currency instanceof Currency) this._currency = new_currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
