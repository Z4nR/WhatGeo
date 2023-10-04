import { useCoordinate } from "@/utils/customHook";
import { getProvByPage, provPage } from "../utils/network";
import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

export default function ProvMap() {
  const provData = useQuery({
    queryKey: ["prov-data"],
    queryFn: async () => {
      const totalPage = await provPage();
      let page = [];
      for (let i = 1; i <= totalPage; i++) {
        const data = await getProvByPage(i);
        page.push(data);
      }
      return page.flat();
    },
    staleTime: 3600,
    refetchOnWindowFocus: false,
  });

  const mapData = provData.data;

  const [coordinate] = useCoordinate(mapData);

  return (
    <div className="py-4">
      <div className="flex flex-wrap gap-2 justify-center my-4">
        <button className="btn btn-sm btn-secondary text-white">
          Provinsi Seluruh Indonesia
        </button>
        <button className="btn btn-sm btn-secondary text-white">
          Provinsi di Wilayah Jawa
        </button>
        <button className="btn btn-sm btn-secondary text-white">
          Provinsi di Wilayah Sumatera
        </button>
        <button className="btn btn-sm btn-secondary text-white">
          Provinsi di Wilayah Kalimantan
        </button>
        <button className="btn btn-sm btn-secondary text-white">
          Provinsi di Wilayah Sulawesi
        </button>
        <button className="btn btn-sm btn-secondary text-white">
          Provinsi di Wilayah Kep. Maluku
        </button>
        <button className="btn btn-sm btn-secondary text-white">
          Provinsi di Wilayah Kep. BalNusRa
        </button>
        <button className="btn btn-sm btn-secondary text-white">
          Provinsi di Wilayah Papua
        </button>
      </div>
      <MapContainer center={[-1.2480891, 122]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinate?.map((item, index) => (
          <GeoJSON key={index} data={item} />
        ))}
      </MapContainer>
    </div>
  );
}
