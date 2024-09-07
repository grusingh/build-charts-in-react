import dynamic from 'next/dynamic';
import Link from 'next/link';

const monthlyVisitsData = [
  { month: 'Jan', visits: 1000 },
  { month: 'Feb', visits: 1200 },
  { month: 'Mar', visits: 1800 },
  { month: 'Apr', visits: 2200 },
  { month: 'May', visits: 2600 },
  { month: 'Jun', visits: 3000 },
  { month: 'Jul', visits: 2800 },
  { month: 'Aug', visits: 2500 },
  { month: 'Sep', visits: 2000 },
  { month: 'Oct', visits: 1500 },
  { month: 'Nov', visits: 1200 },
  { month: 'Dec', visits: 900 },
];

const AreaChart = dynamic(() => import('@/components/area-chart'), { ssr: false });

export default function AreaChartPage() {
  return <div className="p-8">
    <header className="flex justify-between items-center p-2 pb-8">
      <h1 className="text-3xl p-2">Area Chart</h1>
      <Link href="/" className="underline">Home</Link>
    </header>

    <AreaChart data={monthlyVisitsData} />
  </div>;
}