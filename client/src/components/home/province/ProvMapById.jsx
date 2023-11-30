import { getProvById } from '@/utils/network';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

export default function ProvMapById() {
  const [provId, setProvId] = useState('');
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
    },
  });

  const { data, isPending } = useQuery({
    queryKey: ['prov', provId],
    queryFn: async () => await getProvById(provId),
    enabled: provId !== '',
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const prov = useMemo(() => {
    if (isPending) return null;
    return data?.provFeature;
  }, [data, isPending]);

  console.log(prov);

  const onSubmit = (data) => {
    setProvId(data.id);
  };

  return (
    <div className="py-4">
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
              {...register('id', { required: true })}
            />
            <button type="submit" className="btn btn-primary w-fit max-w-xs">
              Cari
            </button>
          </div>
          {errors.id && errors.id.type === 'required' && (
            <label className="label">
              <span className="label-text-alt text-error">
                Harap masukkan ID yang sesuai
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
        <GeoJSON key={`prov-${provId}`} data={prov} />
      </MapContainer>
      <div className="divider" />
    </div>
  );
}
