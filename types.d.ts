interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Account {
  id: number;
  name: string;
  amount: number;
}

interface Card {
  number: number;
  balance: number;
  ccp: number;
  expiration: string;
  type: string;
  bank: string;
}
