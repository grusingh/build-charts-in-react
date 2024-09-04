import dynamic from 'next/dynamic';
import Link from 'next/link';
import useHeatmapData from '@/hooks/use-heatmap-data';

const Heatmap = dynamic(() => import('@/components/Heatmap'), { ssr: false });

export default function HeatmapPage() {
  const zoom = 17;
  const center = [51.5074, -0.1278]; // London
  const heatmapData = useHeatmapData({ center });

  return <div>
    <header className="flex justify-between items-center p-2">
      <h1 className="text-3xl p-2">Heatmap</h1>
      <Link href="/" className="underline">Home</Link>
    </header>

    <Heatmap
      data={heatmapData}
      zoom={zoom}
      center={center}
      style={{ height: '80vh', width: '100%' }}
    />
  </div>;
}