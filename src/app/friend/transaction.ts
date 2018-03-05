import { Friend } from "./friend";

export interface Transaction {
  from: Friend;
  to: Friend;
  value: number;
}

export function transactions(friends: Array<Friend>): Array<Transaction> {
  let transactions = [];
  const avg = averageExpense(friends);
  let fdb = groupById(friends);

  friends.forEach((friend: Friend) => {
    let tf = friendTransactions(friend, fdb, avg);
    fdb = tf["friends"];
    transactions = [...transactions, ...tf["transactions"]];
  });

  return transactions;
}

function averageExpense(friends: Array<Friend>): number {
  return friends.reduce(
    (acc: number, friend: Friend) => acc + friend.expense / friends.length,
    0
  );
}

function addExp(friend: Friend, expense: number): Friend {
  return { ...friend, expense: friend.expense + expense };
}

function groupById(friends: Array<Friend>): { [id: number]: Friend } {
  return friends.reduce(
    (acc, friend) => ({
      ...acc,
      [friend.id]: friend
    }),
    {}
  );
}

function friendTransactions(
  friend: Friend,
  friends: { [id: number]: Friend },
  avg: number
): { transactions: Array<Transaction>; friends: { [id: number]: Friend } } {
  let due = avg - friend.expense;
  if (due <= 0) return { transactions: [], friends };
  let transactions = [];

  friends = Object.keys(friends)
    .map(id => friends[id])
    .reduce((acc, fr) => {
      const value = Math.min(
        avg - acc[friend.id].expense,
        acc[fr.id].expense - avg
      );
      if (acc[fr.id].expense < avg || value === 0) return acc;
      transactions = [...transactions, { from: friend, to: fr, value }];

      return {
        ...acc,
        [fr.id]: addExp(acc[fr.id], -value),
        [friend.id]: addExp(acc[friend.id], value)
      };
    }, friends);

  return { transactions, friends };
}
