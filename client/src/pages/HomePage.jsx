import AllCityMap from '@/components/home/city/AllCityMap';
import CityMapById from '@/components/home/city/CityMapById';
import CityMapByIsle from '@/components/home/city/CityMapByIsle';
import CityMapByProv from '@/components/home/city/CityMapByProv';
import AllProvMap from '@/components/home/province/AllProvMap';
import ProvMapById from '@/components/home/province/ProvMapById';
import ProvMapByIsle from '@/components/home/province/ProvMapByIsle';

export default function HomePage() {
  return (
    <div className="px-6">
      <h1 className="text-4xl text-center text-black font-bold">
        WhatGeo: Indonesia
      </h1>
      <h2 className="pt-4 text-3xl text-center text-black font-bold">
        API Data GeoJSON Indonesia
      </h2>
      <p className="sm:text-justify lg:text-center py-6">
        Kalian tidak perlu lagi memasukan file peta ke dalam projek kalian.
        Cukup panggil API ini, kalian sudah mendapatkan akses ke peta provinsi
        dan kota/kabupaten di Indonesia. Data peta yang digunakan diambil dari
        BPS dan Kemendagri (terakhir diperbarui : Mei 2023)
      </p>
      <AllProvMap />
      <ProvMapByIsle />
      <ProvMapById />
      <AllCityMap />
      <CityMapByIsle />
      <CityMapByProv />
      <CityMapById />
    </div>
  );
}
