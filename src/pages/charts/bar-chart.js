import dynamic from 'next/dynamic';
import Link from 'next/link';

const salesData = [
  { name: 'Electronics', sales: 2400 },
  { name: 'Apparel', sales: 1398 },
  { name: 'Home & Kitchen', sales: 9800 },
  { name: 'Beauty', sales: 3908 },
  { name: 'Toys', sales: 4800 },
];

const BarChart = dynamic(() => import('@/components/bar-chart'), { ssr: false });

export default function BarChartPage() {
  return <div className="p-8">
    <header className="flex justify-between items-center p-2 pb-8">
      <h1 className="text-3xl p-2">Bar Chart</h1>
      <Link href="/" className="underline">Home</Link>
    </header>

    <BarChart data={salesData} />
  </div>;
}