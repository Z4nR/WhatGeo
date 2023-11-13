import { cityCoordinate } from '@/utils/map-helper';
import { cityPage, getCityByPage } from '@/utils/network';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

export default function AllCityMap() {
  const { data } = useQuery({
    queryKey: ['city-page'],
    queryFn: async () => await cityPage(),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const cityData = useQueries({
    queries: Array(data)
      .fill(null)
      .map((_, index) => {
        return {
          queryKey: ['page-city', index + 1],
          queryFn: () => getCityByPage(index + 1),
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

  const city = useMemo(() => {
    if (cityData.pending) return null;
    return cityCoordinate(cityData.data.flat());
  }, [cityData]);

  return (
    <div className="pt-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Kota Seluruh Indonesia
      </h2>
      <MapContainer center={[-1.2480891, 118]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {city?.map((item, index) => (
          <GeoJSON key={index} data={item} />
        ))}
      </MapContainer>
      <div className="divider" />
    </div>
  );
}
