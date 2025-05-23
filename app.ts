import { CompanyAccount } from './class/CompanyAccount';
import { BonusAccount } from './class/BonusAccount';

// Instances
const company = new CompanyAccount("XPTO Corp", 12345);
const bonusClient = new BonusAccount("Vitor Duraes", 67890);

// CompanyAccount methods
console.log("\n== Company Account ==");
company.getBalance();
company.deposit(500);
company.getLoan(1000);
company.withdraw(200);
company.getBalance();

// BonusAccount methods
console.log("\n== Bonus Account ==");
bonusClient.getBalance();
bonusClient.deposit(100); // Will add 110
bonusClient.withdraw(50);
bonusClient.getBalance();
