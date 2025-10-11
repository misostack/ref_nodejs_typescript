class Club {
  constructor(private name: string) {}
  toString() {
    return `Club: ${this.name}`;
  }
}
class User {
  constructor(
    private name: string,
    private club: Club
  ) {}

  toString() {
    return `User: ${this.name}.\nClub info: ${this.club.toString()}`;
  }
}

// demo
const club = new Club('Football');
const user = new User('Alice', club);
console.log(user.toString());
