const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];

// Tính số dư cuối cùng của từng tài khoản.
const balances = transactions.reduce((acc, item) => {
  const { account, type, amount } = item;
  if (!acc[account]) acc[account] = 0;
  acc[account] += type === "deposit" ? amount : -amount;
  return acc;
}, {});
console.log(balances);

// Tìm tài khoản có số dư cao nhất.
const maxAccount = Object.entries(balances).reduce((max, [acc, balance], index) => {
  if (index === 0 || balance > max.balance) {
    return { acc, balance };
  }
  return max;
}, {});
console.log(maxAccount);

// Nhóm các giao dịch theo tài khoản, trong đó mỗi tài khoản có danh sách giao dịch của riêng nó.
const groupedTransactions = transactions.reduce((acc, value) => {
  const { account } = value;
  if (!acc[account]) acc[account] = [];
  acc[account].push(value);
  return acc;
}, {});
console.log(groupedTransactions);