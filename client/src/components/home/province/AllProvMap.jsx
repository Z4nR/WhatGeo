import { provCoordinate } from '@/utils/map-helper';
import { getProvByPage, provPage } from '@/utils/network';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

export default function AllProvMap() {
  const totalPage = useQuery({
    queryKey: ['prov-page'],
    queryFn: async () => await provPage(),
    staleTime: 3600,
    refetchOnWindowFocus: false,
  });
  const pageProv = totalPage.data;

  const { data } = useQueries({
    queries: Array(pageProv)
      .fill(null)
      .map((_, index) => {
        return {
          queryKey: ['page-prov', index],
          queryFn: () => getProvByPage(1 + index),
          staleTime: 3600,
          refetchOnWindowFocus: false,
        };
      }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
      };
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const prov = useMemo(() => provCoordinate(data), [data]);

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
