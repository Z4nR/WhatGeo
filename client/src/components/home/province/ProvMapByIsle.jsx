import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { getProvByIsle, provPageByIsle } from '@/utils/network';
import { provCoordinate } from '@/utils/map-helper';

export default function ProvMapByIsle() {
  const [island, setIsland] = useState('');
  const { data, refetch } = useQuery({
    queryKey: ['prov-data', island],
    queryFn: async () => {
      const totalPage = await provPageByIsle(island);
      let page = [];
      for (let i = 1; i <= totalPage; i++) {
        const data = await getProvByIsle(island, i);
        page.push(data);
      }
      return page.flat();
    },
    staleTime: 3600000,
    refetchOnWindowFocus: false,
  });

  const prov = useMemo(() => provCoordinate(data), [data]);

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
      <MapContainer center={[-1.2480891, 122]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {prov?.map((item, index) => (
          <GeoJSON key={index} data={item} />
        ))}
      </MapContainer>
      <div className="pt-4 px-4 flex flex-wrap justify-center gap-2">
        {btnData.map((item, index) => (
          <button
            onClick={() => {
              setIsland(item.island), refetch();
            }}
            key={index}
            className="btn btn-sm px-0.5 w-full xs:max-w-xs btn-secondary text-xs text-white"
          >
            {item.btnTitle}
          </button>
        ))}
      </div>
      <div className="divider" />
    </div>
  );
}
