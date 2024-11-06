// main.js
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

console.log("Initial Portfolio Value:", calculatePortfolioValue());
console.log("Initial Portfolio Allocation:", getPortfolioAllocation());

try {
    const transaction1 = new Transaction(1, 'buy', 5); // Buying 5 AAPL stocks
    console.log("Transaction 1:", transaction1);

    const transaction2 = new Transaction(2, 'sell', 2); // Selling 2 GOOGL stocks
    console.log("Transaction 2:", transaction2);

    console.log("Updated Portfolio Value:", calculatePortfolioValue());
    console.log("Updated Portfolio Allocation:", getPortfolioAllocation());
} catch (error) {
    console.error(error.message);
}
