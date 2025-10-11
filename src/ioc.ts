import { Container, inject, injectable } from 'inversify';
import 'reflect-metadata';

// Define symbols for dependency injection
const TYPES = {
  Club: Symbol.for('Club'),
  User: Symbol.for('User'),
  ClubName: Symbol.for('ClubName'),
  UserName: Symbol.for('UserName'),
};

@injectable()
class IoCClub {
  constructor(@inject(TYPES.ClubName) private name: string) {}

  toString() {
    return `Club: ${this.name}`;
  }

  setName(name: string) {
    this.name = name;
  }
}

@injectable()
class IoCUser {
  constructor(
    @inject(TYPES.UserName) private name: string,
    @inject(TYPES.Club) public readonly club: IoCClub
  ) {}

  toString() {
    return `User: ${this.name}.\nClub info: ${this.club.toString()}`;
  }
}

const container: Container = new Container();

// Bind the dependencies
container.bind<string>(TYPES.ClubName).toConstantValue('Football');
container.bind<string>(TYPES.UserName).toConstantValue('Alice');
container.bind<IoCClub>(TYPES.Club).to(IoCClub);
container.bind<IoCUser>(TYPES.User).to(IoCUser);

// Get instances from container
const club = container.get<IoCClub>(TYPES.Club);
console.log(club.toString());

const user = container.get<IoCUser>(TYPES.User);
user.club.setName('Football Club');
console.log(user.toString());
