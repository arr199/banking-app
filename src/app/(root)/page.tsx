import { AmountChart } from "@/components/home/amountChart";
import { MoneyAmount } from "@/components/home/moneyAmount";
import Wrapper from "@/components/shared/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <header>
        <h1 className="text-2xl font-bold">
          Welcome <span className="text-blue-500">Adrian</span>
        </h1>
        <p className="mt-2">
          Access and manage your account and transactions efficiently
        </p>
      </header>
      <section className="flex mt-10 gap-2">
        <AmountChart />
        <MoneyAmount totalAccounts={1} totalAmount={1200} />
      </section>
    </Wrapper>
  );
}
