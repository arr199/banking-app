import { type Models } from "node-appwrite";

type User = Models.User<Models.Preferences>;

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
