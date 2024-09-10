import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold pb-4">Build Charts in React</h1>
      <ul>
        <li className="my-4">
          <Link className="underline text-blue-900" href="/charts/line-chart">Line Chart</Link>
        </li>
        <li className="my-4">
          <Link className="underline text-blue-900" href="/charts/pie-chart">Pie Chart</Link>
        </li>
        <li className="my-4">
          <Link className="underline text-blue-900" href="/charts/bar-chart">Bar Chart</Link>
        </li>
        <li className="my-4">
          <Link className="underline text-blue-900" href="/charts/area-chart">Area Chart</Link>
        </li>
        <li className="my-4">
          <Link className="underline text-blue-900" href="/charts/stacked-area-chart">Stacked Area Chart</Link>
        </li>
        <li className="my-4">
          <Link className="underline text-blue-900" href="/charts/heatmap">Heatmap</Link>
        </li>
      </ul>
    </div>
  );
}
