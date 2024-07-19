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

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DATABASE_URL: string;
      // add more environment variables and their types here
    }
  }
}
