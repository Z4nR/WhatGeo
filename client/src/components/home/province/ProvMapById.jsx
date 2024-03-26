import { getProvById } from '@/utils/network';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { originalStyle, onEachFeature } from '@/utils/map-helper';

export default function ProvMapById() {
  const [provId, setProvId] = useState(11);

  const { data, isPending } = useQuery({
    queryKey: ['prov', provId],
    queryFn: async () => await getProvById(provId),
    enabled: provId !== '',
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

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

  const zoomToFeature = (e) => {
    const map = e.target._map;
    map.fitBounds(e.target.getBounds());
  };

  return (
    <div className="pt-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Provinsi berdasarkan Id Provinsi
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
          <label className="label">
            <span className="label-text-alt text-gray-500">
              ID Provinsi untuk inisiasi awal : 11 (Prov. Aceh)
            </span>
          </label>
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
        <GeoJSON
          key={isPending ? 'loading' : `prov-${provId}`}
          data={data?.provFeature}
          style={{ fillColor: '#11648e', ...originalStyle }}
          onEachFeature={(feature, layer) =>
            onEachFeature(feature, layer, zoomToFeature)
          }
        />
      </MapContainer>
      <div className="divider" />
    </div>
  );
}
