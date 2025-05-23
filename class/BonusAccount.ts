import { DioAccount } from './DioAccount';

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposits(value: number): void {
    if (this['validateStatus']()) {
      const total = value + 10;
      this['increaseBalance'](total);
      console.log(`Deposit with bonus! $${value} + $10 = $${total}`);
    }
  }
}
