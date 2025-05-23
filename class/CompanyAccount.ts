import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(value: number): void {
    if (this['validateStatus']()) {
      this['increaseBalance'](value);
      console.log(`Loan of $${value} approved.`);
    }
  }
}
