import { randomNormal } from 'd3-random';

/**
 * Generate heatmap data around a center
 * @param center - [latitude, longitude]
 * @param numPoints - Number of points to generate
 * @param radius - Radius around the center in km
 * @returns {*[]} - Array of points [latitude, longitude, intensity]
 */
export function generateHeatmapData(center, numPoints, radius) {
  const [centerLat, centerLng] = center;
  const data = [];
  const randomIntensity = randomNormal(0.5, 0.2); // Mean 0.5, standard deviation 0.2

  for (let i = 0; i < numPoints; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius;
    const lat = centerLat + (distance * Math.cos(angle)) / 111; // 1 degree latitude ~ 111 km
    const lng = centerLng + (distance * Math.sin(angle)) / (111 * Math.cos(centerLat * (Math.PI / 180))); // Adjust for longitude
    let intensity = randomIntensity();
    intensity = Math.max(0, Math.min(1, intensity)); // Clamp intensity between 0 and 1
    data.push([lat, lng, intensity]);
  }

  return data;
}