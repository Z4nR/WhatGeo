import DetailProvCard from '@/components/detail/DetailProvCard';
import {
  provCoordinate,
  originalStyle,
  onEachFeature,
} from '@/utils/map-helper';
import { getProvByPage, provPage } from '@/utils/network';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

export default function AllProvMap() {
  const [provId, setProvId] = useState(0);
  const [detail, setDetail] = useState(false);

  const { data } = useQuery({
    queryKey: ['prov-page'],
    queryFn: async () => await provPage(),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const provData = useQueries({
    queries: Array(data)
      .fill(null)
      .map((_, index) => {
        return {
          queryKey: ['page-prov', index + 1],
          queryFn: () => getProvByPage(index + 1),
          enabled: data > 0,
          staleTime: Infinity,
          gcTime: Infinity,
          refetchOnWindowFocus: false,
        };
      }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });

  const prov = useMemo(() => {
    if (provData.pending) return null;
    return provCoordinate(provData.data.flat());
  }, [provData]);

  const zoomToFeature = (e, feature) => {
    const provinceCode = feature.properties.Code;
    setProvId(provinceCode);
    setDetail(true);
    const map = e.target._map;
    map.fitBounds(e.target.getBounds());
  };

  return (
    <div className="pt-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Provinsi Seluruh Indonesia
      </h2>
      <MapContainer center={[-1.2480891, 118]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {prov?.map((item, index) => (
          <GeoJSON
            key={index}
            data={item}
            style={{ fillColor: '#11648e', ...originalStyle }}
            onEachFeature={(feature, layer) =>
              onEachFeature(feature, layer, zoomToFeature)
            }
          />
        ))}
      </MapContainer>
      {detail && <DetailProvCard setDetail={setDetail} provId={provId} />}
      <div className="divider" />
    </div>
  );
}
