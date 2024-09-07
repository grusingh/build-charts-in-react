import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';

const HeatmapLayer = ({ data }) => {
  const map = useMap();
  const radius = 25;
  const blur = 15;

  React.useEffect(() => {
    const heat = L.heatLayer(data, { radius, blur }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map, data]);

  return null;
};

const Heatmap = ({data, center, zoom, style}) => {
  return (
    <MapContainer center={center} zoom={zoom} style={style}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer data={data} />
    </MapContainer>
  );
};

export default Heatmap;