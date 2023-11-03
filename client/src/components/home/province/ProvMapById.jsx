import { MapContainer, TileLayer } from 'react-leaflet';

export default function ProvmMapById() {
  return (
    <div className="py-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Provinsi berdasarkan Id Provinsi
      </h2>
      <div className="flex justify-center">
        <form className="form-control w-full max-w-sm my-4">
          <label className="label">
            <span className="label-text">Masukkan ID Provinsi</span>
          </label>
          <div className="flex flex-row gap-4">
            <input
              type="number"
              placeholder="Ketik ID disini"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary w-fit max-w-xs">Cari</button>
          </div>
          <label className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </label>
        </form>
      </div>
      <MapContainer center={[-1.2480891, 122]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <div className="divider" />
    </div>
  );
}
