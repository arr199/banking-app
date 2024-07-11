"use client";
import { ArcElement, Chart, ChartData, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);
interface AmountChartProps {
  data: AccountsData[];
}
interface AccountsData {
  id: number;
  name: string;
  amount: number;
}

export function AmountChart({ data = [] }: AmountChartProps): JSX.Element {
  const chartData: ChartData = {
    datasets: [
      {
        label: "Banks",
        data: data.map((e) => e.amount),
        backgroundColor: ["#0044FF", "#00aaFF", "#00CCFF"],
      },
    ],
    labels: data.map((e) => e.name),
  };

  return (
    <div className="h-full self-center">
      <Doughnut width="100px" height="100px"
        title="Banks"
        options={{
            maintainAspectRatio : false,
            plugins: {
            legend: {
              display: false,
              align: "start",
             
            },
            title: {
              display: true,
            },
          },
        }}
        data={chartData as any}
      />
    </div>
  );
}
