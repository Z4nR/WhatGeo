import ProvMapByIsle from "../components/home/province/ProvMapByIsle";
import AllProvMap from "../components/home/province/AllProvMap";

export default function HomePage() {
  return (
    <div className="px-6">
      <h1 className="text-3xl text-center text-black font-bold">
        WhatGeo: Indonesia <br />
        API Map bagi yang membutuhkan
      </h1>
      <p className="text-justify py-6">
        Kalian tidak perlu lagi memasukan file peta ke dalam projek kalian.
        Cukup panggil API ini, kalian sudah mendapatkan akses ke peta provinsi
        dan kota/kabupaten di Indonesia.
      </p>
      <AllProvMap />
      <ProvMapByIsle />
    </div>
  );
}
