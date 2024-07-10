import MapSkeleton from '@/components/Skeleton';
import {
  cityCoordinate,
  originalStyle,
  onEachFeature,
} from '@/utils/map-helper';
import { cityPage, getCityByPage } from '@/utils/network';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';

export default function AllCityMap() {
  const [name, setName] = useState('');
  const [marker, setMarker] = useState([]);

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
        Peta Kota Seluruh Indonesia
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
              key={index}
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
      <div className="divider" />
    </div>
  );
}
