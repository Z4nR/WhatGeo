import { provCoordinate } from '@/utils/map-helper';
import { getProvByPage, provPage } from '@/utils/network';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

export default function AllProvMap() {
  const { data } = useQuery({
    queryKey: ['prov-page'],
    queryFn: async () => await provPage(),
    staleTime: 60 * 60 * 1000,
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
          staleTime: 60 * 60 * 1000,
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

  return (
    <div className="pt-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Provinsi
      </h2>
      <MapContainer center={[-1.2480891, 122]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {prov?.map((item, index) => (
          <GeoJSON key={index} data={item} />
        ))}
      </MapContainer>
      <div className="divider" />
    </div>
  );
}
