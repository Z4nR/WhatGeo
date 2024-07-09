import MapSkeleton from '@/components/Skeleton';
import { btnData } from '@/utils/docs-data';
import {
  cityCoordinate,
  originalStyle,
  onEachFeature,
} from '@/utils/map-helper';
import { cityPageByIsle, getCityByIsle } from '@/utils/network';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';

export default function CityMapByIsle() {
  const [island, setIsland] = useState('');
  const [name, setName] = useState('');
  const [marker, setMarker] = useState([]);

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
          queryKey: ['city-isle', island, index + 1],
          queryFn: () => getCityByIsle(island, index + 1),
          staleTime: Infinity,
          gcTime: Infinity,
          refetchOnWindowFocus: false,
        };
      }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        isLoading: results.some((result) => result.isLoading),
      };
    },
  });

  const city = useMemo(() => {
    if (cityData.isLoading) return null;
    return cityCoordinate(cityData.data.flat());
  }, [cityData]);

  const zoomToFeature = (e, feature) => {
    const cityName = feature.properties.Name;
    setName(cityName);
    setMarker(e.latlng);
    const map = e.target._map;
    map.fitBounds(e.target.getBounds());
  };

  return (
    <div className="pt-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Kota berdasarkan Pulau dan Kepulauannya
      </h2>
      {!cityData.isLoading ? (
        <MapContainer
          center={[-1.2480891, 118]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marker && name && <Popup position={marker}>{name}</Popup>}
          {city?.map((item, index) => (
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
      ) : (
        <MapSkeleton />
      )}

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
