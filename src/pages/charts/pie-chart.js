import dynamic from 'next/dynamic';
import Link from 'next/link';

const budgetAllocation = [
  { name: 'Salaries', value: 50 },
  { name: 'Marketing', value: 20 },
  { name: 'Operations', value: 15 },
  { name: 'R&D', value: 10 },
  { name: 'Miscellaneous', value: 5 },
];

const PieChart = dynamic(() => import('@/components/pie-chart'), { ssr: false });

export default function PieChartPage() {
  return <div className="p-8">
    <header className="flex justify-between items-center p-2 pb-8">
      <h1 className="text-3xl p-2">Pie Chart</h1>
      <Link href="/" className="underline">Home</Link>
    </header>

    <PieChart data={budgetAllocation} />
  </div>;
}