export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`You deposited $${value}. Current balance: $${this.balance}`);
    } else {
      throw new Error('Invalid account for deposit.');
    }
  };

  withdraw = (value: number): void => {
    if (!this.validateStatus()) {
      throw new Error('Invalid account');
    }
    if (this.balance < value) {
      throw new Error('Insufficient funds');
    }
    this.balance -= value;
    console.log(`You withdrew $${value}. Current balance: $${this.balance}`);
  };

  getBalance = (): void => {
    console.log(`Current balance: $${this.balance}`);
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return true;
    }
    throw new Error('Invalid account');
  };

  protected increaseBalance = (value: number): void => {
    this.balance += value;
  };

  protected decreaseBalance = (value: number): void => {
    this.balance -= value;
  };
}
