import { DetailCardCity } from '@/components/detail/DetailCard';
import {
  cityCoordinate,
  originalStyle,
  onEachFeature,
} from '@/utils/map-helper';
import { cityPageByProv, getCityByProv } from '@/utils/network';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

export default function CityMapByProv() {
  const [provId, setProvId] = useState(11);
  const [cityId, setCityId] = useState(0);
  const [detail, setDetail] = useState(false);

  const { data } = useQuery({
    queryKey: ['city-prov-page', provId],
    queryFn: async () => await cityPageByProv(provId),
    enabled: provId !== '',
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const cityData = useQueries({
    queries: Array(data)
      .fill(null)
      .map((_, index) => {
        return {
          queryKey: ['city-isle', provId, index + 1],
          queryFn: () => getCityByProv(provId, index + 1),
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

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
    },
  });

  const onSubmit = (data) => {
    setProvId(data.id);
  };

  const zoomToFeature = (e, feature) => {
    const cityCode = feature.properties.Code;
    setCityId(cityCode);
    setDetail(true);
    const map = e.target._map;
    map.fitBounds(e.target.getBounds());
  };

  return (
    <div className="pt-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Kota berdasarkan Id Provinsi
      </h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control w-full max-w-sm my-4"
        >
          <label className="label">
            <span className="label-text">Masukkan ID Provinsi</span>
          </label>
          <div className="flex flex-row gap-4">
            <input
              type="number"
              placeholder="Ketik ID disini"
              className="input input-bordered w-full max-w-xs"
              {...register('id', { pattern: /[0-9]{2}/ })}
            />
            <button type="submit" className="btn btn-primary w-fit max-w-xs">
              Cari
            </button>
            <button
              onClick={() => {
                reset();
              }}
              className="btn btn-outline btn-error w-fit max-w-xs"
            >
              Reset
            </button>
          </div>
          {errors.id && errors.id.type === 'pattern' && (
            <label className="label">
              <span className="label-text-alt text-error">
                Harap Masukkan ID Sesuai Dokumentasi
              </span>
            </label>
          )}
        </form>
      </div>
      <MapContainer center={[-1.2480891, 118]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {city?.map((item, index) => (
          <GeoJSON
            key={`${provId}-${index}`}
            data={item}
            style={{ fillColor: '#11648e', ...originalStyle }}
            onEachFeature={(feature, layer) =>
              onEachFeature(feature, layer, zoomToFeature)
            }
          />
        ))}
      </MapContainer>
      {detail && <DetailCardCity setDetail={detail} cityId={cityId} />}
      <div className="divider" />
    </div>
  );
}
