import { useMemo, useState } from "react";
import { getProvByIsle, provPageByIsle } from "../../../utils/network";
import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { provCoordinate } from "../../../utils/map-helper";

export default function ProvMapByIsle() {
  const [island, setIsland] = useState("");
  const { data, refetch } = useQuery({
    queryKey: ["prov-data", island],
    queryFn: async () => {
      const totalPage = await provPageByIsle(island);
      let page = [];
      for (let i = 1; i <= totalPage; i++) {
        const data = await getProvByIsle(island, i);
        page.push(data);
      }
      return page.flat();
    },
    staleTime: 3600,
    refetchOnWindowFocus: false,
  });

  const prov = useMemo(() => provCoordinate(data), [data]);

  const btnData = {
    right: [
      {
        btnTitle: "Provinsi di Wilayah Sulawesi",
        island: "Sulawesi",
      },
      {
        btnTitle: "Provinsi di Wilayah Papua",
        island: "Papua",
      },
      {
        btnTitle: "Provinsi di Wilayah Kep. BalNusRa",
        island: "BalNusRa",
      },
      {
        btnTitle: "Provinsi di Wilayah Kep. Maluku",
        island: "Maluku",
      },
    ],
    left: [
      {
        btnTitle: "Provinsi di Wilayah Jawa",
        island: "Jawa",
      },
      {
        btnTitle: "Provinsi di Wilayah Sumatera",
        island: "Sumatera",
      },
      {
        btnTitle: "Provinsi di Wilayah Kalimantan",
        island: "Kalimantan",
      },
    ],
  };

  return (
    <div className="py-4">
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
      <div className="grid grid-flow-col gap-2 my-4">
        <div className="grid grid-flow-row content-start gap-2 justify-center">
          {btnData.left.map((item, index) => (
            <button
              onClick={() => {
                setIsland(item.island), refetch();
              }}
              key={index}
              className="btn btn-sm w-full md:max-w-xs btn-secondary text-xs text-white"
            >
              {item.btnTitle}
            </button>
          ))}
        </div>
        <div className="grid grid-flow-row content-start gap-2 justify-center">
          {btnData.right.map((item, index) => (
            <button
              onClick={() => {
                setIsland(item.island), refetch();
              }}
              key={index}
              className="btn btn-sm w-full md:max-w-xs btn-secondary text-xs text-white"
            >
              {item.btnTitle}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
