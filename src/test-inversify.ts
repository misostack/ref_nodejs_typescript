import { Container, injectable } from 'inversify';
import 'reflect-metadata';

// Example 1: Works with autobind - No primitive dependencies
export class Katana {
  public readonly damage: number = 10;
}

@injectable()
export class Samurai {
  public readonly katana: Katana;

  constructor(katana: Katana) {
    this.katana = katana;
  }
}

// Example 2: Doesn't work with autobind - Has primitive dependencies
@injectable()
class IoCClub {
  constructor(private name: string) {}
  toString() {
    return `Club: ${this.name}`;
  }
}

@injectable()
class IoCUser {
  constructor(
    private name: string,
    public readonly club: IoCClub
  ) {}

  toString() {
    return `User: ${this.name}.\nClub info: ${this.club.toString()}`;
  }
}

console.log('Testing Samurai example...');
const container1: Container = new Container();
try {
  const samurai: Samurai = container1.get(Samurai, { autobind: true });
  console.log('✅ Samurai works:', samurai.katana.damage);
} catch (error) {
  console.log(
    '❌ Samurai failed:',
    error instanceof Error ? error.message : String(error)
  );
}

console.log('\nTesting IoCClub example...');
const container2: Container = new Container();
try {
  const club = container2.get(IoCClub, { autobind: true });
  console.log('✅ IoCClub works:', club.toString());
} catch (error) {
  console.log(
    '❌ IoCClub failed:',
    error instanceof Error ? error.message : String(error)
  );
}

console.log('\nTesting IoCUser example...');
const container3: Container = new Container();
try {
  const user = container3.get(IoCUser, { autobind: true });
  console.log('✅ IoCUser works:', user.toString());
} catch (error) {
  console.log(
    '❌ IoCUser failed:',
    error instanceof Error ? error.message : String(error)
  );
}
