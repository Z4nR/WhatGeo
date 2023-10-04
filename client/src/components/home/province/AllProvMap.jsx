import { provCoordinate } from "@/utils/map-helper";
import { getProvByPage, provPage } from "@/utils/network";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

export default function AllProvMap() {
  const { data } = useQuery({
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

  const prov = useMemo(() => provCoordinate(data), [data]);

  return (
    <div className="py-4">
      <h2 className="text-xl text-center text-black font-bold pb-2">
        Peta Provinsi
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
    </div>
  );
}
