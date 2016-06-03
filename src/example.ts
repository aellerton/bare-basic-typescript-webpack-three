export class Person {
  constructor(public first: string, public last: string) {
  }

  get name(): string {
    return `${this.first} ${this.last}`;
  }
}


