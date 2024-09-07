import dynamic from 'next/dynamic';
import Link from 'next/link';

const monthlySalesData = [
  { month: 'Jan', sales2022: 4000, sales2023: 4500 },
  { month: 'Feb', sales2022: 3000, sales2023: 4000 },
  { month: 'Mar', sales2022: 5000, sales2023: 6000 },
  { month: 'Apr', sales2022: 7000, sales2023: 7000 },
  { month: 'May', sales2022: 6000, sales2023: 7500 },
  { month: 'Jun', sales2022: 8000, sales2023: 8500 },
  { month: 'Jul', sales2022: 12000, sales2023: 9500 },
  { month: 'Aug', sales2022: 10000, sales2023: 10500 },
  { month: 'Sep', sales2022: 12000, sales2023: 12500 },
  { month: 'Oct', sales2022: 11000, sales2023: 11500 },
  { month: 'Nov', sales2022: 13000, sales2023: 13500 },
  { month: 'Dec', sales2022: 14000, sales2023: 18500 }
];

const LineChart = dynamic(() => import('@/components/line-chart'), { ssr: false });

export default function LineChartPage() {
  return <div className="p-8">
    <header className="flex justify-between items-center p-2 pb-8">
      <h1 className="text-3xl p-2">Line Chart</h1>
      <Link href="/" className="underline">Home</Link>
    </header>

    <LineChart data={monthlySalesData} />
  </div>;
}