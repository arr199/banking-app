"use client";
import CountUp from "react-countup";

export function MoneyAmount({
  totalAccounts = 0,
  totalAmount = 0,
}): JSX.Element {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold">Bank Accounts: {totalAccounts}</h3>
      <p className="mt-4 text-sm text-muted-foreground">
        Total current Balance
      </p>
      <CountUp
        className="mt-2 text-3xl"
        prefix="$"
        start={0}
        end={totalAmount}
      />
    </div>
  );
}
