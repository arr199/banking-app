import { AmountChart } from "@/components/home/amountChart";
import { BalanceInfo } from "@/components/home/balanceInfo";
import RightSideBar from "@/components/home/rightSideBar";
import Wrapper from "@/components/shared/wrapper";
import { accountsData } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex justify-between w-full ">
      <Wrapper>
        <header className="w-full">
          <h1 className="text-2xl font-bold">
            Welcome <span className="text-blue-500">Adrian</span>
          </h1>
          <p className="mt-2">
            Access and manage your account and transactions efficiently
          </p>
        </header>
        <section className="flex mt-10 gap-2 sm:gap-4 w-full items-center p-4 shadow-container rounded-md">
          <AmountChart data={accountsData} />
          <BalanceInfo totalAccounts={1} totalAmount={1235.12} />
        </section>
      </Wrapper>
      <RightSideBar />
    </div>
  );
}
