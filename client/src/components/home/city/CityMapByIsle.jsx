import { cityCoordinate } from '@/utils/map-helper';
import { cityPageByIsle, getCityByIsle } from '@/utils/network';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

export default function CityMapByIsle() {
  const [island, setIsland] = useState('');
  const { data } = useQuery({
    queryKey: ['city-isle-page', island],
    queryFn: async () => await cityPageByIsle(island),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const cityData = useQueries({
    queries: Array(data)
      .fill(null)
      .map((_, index) => {
        return {
          queryKey: ['prov-isle', island, index + 1],
          queryFn: () => getCityByIsle(island, index + 1),
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

  const btnData = [
    {
      btnTitle: 'Prov. di Wilayah Sulawesi',
      island: 'Sulawesi',
    },
    {
      btnTitle: 'Prov. di Wilayah Papua',
      island: 'Papua',
    },
    {
      btnTitle: 'Prov. di Wilayah Kep. BalNusRa',
      island: 'BalNusra',
    },
    {
      btnTitle: 'Prov. di Wilayah Kep. Maluku',
      island: 'Maluku',
    },
    {
      btnTitle: 'Prov. di Wilayah Jawa',
      island: 'Jawa',
    },
    {
      btnTitle: 'Prov. di Wilayah Sumatera',
      island: 'Sumatera',
    },
    {
      btnTitle: 'Prov. di Wilayah Kalimantan',
      island: 'Kalimantan',
    },
  ];

  return (
    <div className="pt-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Provinsi berdasarkan Pulau dan Kepulauannya
      </h2>
      <MapContainer center={[-1.2480891, 118]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {city?.map((item, index) => (
          <GeoJSON key={`${island}-${index}`} data={item} />
        ))}
      </MapContainer>
      <div className="pt-4 px-4 flex flex-wrap justify-center gap-2">
        {btnData.map((item, index) => (
          <button
            onClick={() => {
              setIsland(item.island);
            }}
            key={`btn-${index}`}
            className="btn btn-sm btn-secondary text-xs text-white px-0.5 w-full xs:max-w-xs "
          >
            {item.btnTitle}
          </button>
        ))}
        <button
          onClick={() => {
            setIsland('');
          }}
          className="btn btn-sm btn-outline btn-error text-xs text-white px-0.5 w-full xs:max-w-xs "
        >
          Bersihkan Data Peta
        </button>
      </div>
      <div className="divider" />
    </div>
  );
}
