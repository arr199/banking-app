"use client";
import CountUp from "react-countup";

export function BalanceInfo({
  totalAccounts = 0,
  totalAmount = 0,
}): JSX.Element {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold">Bank Accounts: {totalAccounts}</h3>
      <p className="mt-4 text-xs text-muted-foreground font-semibold">
        Total current Balance
      </p>

      <CountUp
        className="mt-1 text-3xl font-semibold"
        prefix="$"
        start={0}
        end={totalAmount}
        decimal="."
        decimals={2}
      />
    </div>
  );
}
