import { useMemo } from 'react';
import { generateHeatmapData } from '@/utils/heatmap';

export default function useHeatmapData({center}) {
  const numberOfPoints = 1500;
  const radius = 5;

  return useMemo(() => generateHeatmapData(center, numberOfPoints, radius), []);
}