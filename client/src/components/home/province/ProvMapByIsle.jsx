import { useMemo, useState } from 'react';
import { useQueries, useQuery } from '@tanstack/react-query';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import { getProvByIsle, provPageByIsle } from '@/utils/network';
import {
  provCoordinate,
  originalStyle,
  onEachFeature,
} from '@/utils/map-helper';
import { btnData } from '@/utils/docs-data';

export default function ProvMapByIsle() {
  const [name, setName] = useState('');
  const [marker, setMarker] = useState([]);
  const [island, setIsland] = useState('');

  const { data } = useQuery({
    queryKey: ['prov-isle-page', island],
    queryFn: async () => await provPageByIsle(island),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const provData = useQueries({
    queries: Array(data)
      .fill(null)
      .map((_, index) => {
        return {
          queryKey: ['prov-isle', island, index + 1],
          queryFn: () => getProvByIsle(island, index + 1),
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
    const provinceName = feature.properties.Name;
    setName(provinceName);
    setMarker(e.latlng);
    const map = e.target._map;
    map.fitBounds(e.target.getBounds());
  };

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
        {marker && name && <Popup position={marker}>{name}</Popup>}
        {prov?.map((item, index) => (
          <GeoJSON
            key={`${island}-${index}`}
            data={item}
            style={{ fillColor: '#11648e', ...originalStyle }}
            onEachFeature={(feature, layer) =>
              onEachFeature(feature, layer, zoomToFeature)
            }
          />
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
