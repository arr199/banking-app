export const accountsData = [
  {
    id: 1,
    name: "Checking",
    amount: 1235,
  },
  {
    id: 2,
    name: "Savings",
    amount: 5000,
  },
  {
    id: 3,
    name: "Investment",
    amount: 10000,
  },
];

export type AccountData = (typeof accountsData)[0];

export const mockCards = [
  {
    number: 1234567890,
    balance: 125.32,
    ccp: 118,
    expiration: "12/23",
    type: "visa",
    bank: "Chase",
  },
  {
    number: 1234567890,
    balance: 1233.5,
    ccp: 351,
    expiration: "12/23",
    type: "visa",
    bank: "Chase",
  },
];

export type Card = (typeof mockCards)[0];
