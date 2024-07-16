import { Configuration, PlaidEnvironments, PlaidApi } from "plaid";

const { PLAID_CLIENT_ID } = process.env;

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SANDBOX_SECRET,
    },
  },
});

export const plaidClient = new PlaidApi(configuration);

async function getPlaidLinkToken(): Promise<any> {
  const response = await plaidClient.linkTokenCreate({
    user: {
      client_user_id: PLAID_CLIENT_ID,
    },
    products: ["auth", "transactions"],
  });
}
