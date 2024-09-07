import dynamic from 'next/dynamic';
import Link from 'next/link';

const StackedAreaChart = dynamic(() => import('@/components/stacked-area-chart'), { ssr: false });

const monthlyTrafficData = [
  { month: 'Jan', direct: 500, referral: 300, social: 150 },
  { month: 'Feb', direct: 550, referral: 350, social: 200 },
  { month: 'Mar', direct: 620, referral: 450, social: 280 },
  { month: 'Apr', direct: 700, referral: 500, social: 320 },
  { month: 'May', direct: 750, referral: 520, social: 350 },
  { month: 'Jun', direct: 680, referral: 590, social: 400 },
  { month: 'Jul', direct: 900, referral: 630, social: 420 },
  { month: 'Aug', direct: 840, referral: 680, social: 450 },
  { month: 'Sep', direct: 960, referral: 710, social: 490 },
  { month: 'Oct', direct: 880, referral: 730, social: 550 },
  { month: 'Nov', direct: 1030, referral: 750, social: 600 },
  { month: 'Dec', direct: 950, referral: 780, social: 580 }
];

export default function StackedAreaChartPage() {
  return <div className="p-8">
    <header className="flex justify-between items-center p-2 pb-8">
      <h1 className="text-3xl p-2">Stacked Area Chart</h1>
      <Link href="/" className="underline">Home</Link>
    </header>

    <StackedAreaChart data={monthlyTrafficData} />
  </div>;
}