const provRoute = [
  {
    router: '{base_url}/prov/page',
    describe: 'Untuk mengetahui jumlah halaman keseluruhan data provinsi',
    param: '-',
    query: '-',
  },
  {
    router: '{base_url}/prov',
    describe: 'Memuat tiga data provinsi per halaman',
    param: '-',
    query: 'page : number',
  },
  {
    router: '{base_url}/prov/isle/page',
    describe: 'Untuk mengetahui jumlah halaman data provinsi sesuai pulau',
    param: '-',
    query: '-',
  },
  {
    router: '{base_url}/prov/isle',
    describe: 'Memuat tiga data provinsi per halaman sesuai pulau',
    param: '-',
    query: 'island : string, page : number',
  },
  {
    router: '{base_url}/prov/:id/map',
    describe: 'Untuk mengetahui koordinat geojson berdasarkan id provinsi',
    param: 'id : string',
    query: '-',
  },
  {
    router: '{base_url}/prov/:id/detail',
    describe: 'Untuk mengetahui infomrasi singkat berdasarkan id provinsi',
    param: 'id : string',
    query: '-',
  },
];

const cityRoute = [
  {
    router: '{base_url}/city/page',
    describe: 'Untuk mengetahui jumlah halaman keseluruhan data kota',
    param: '-',
    query: '-',
  },
  {
    router: '{base_url}/city',
    describe: 'Memuat lima data kota per halaman',
    param: '-',
    query: 'page : number',
  },
  {
    router: '{base_url}/city/prov/page',
    describe: 'Untuk mengetahui jumlah halaman data kota sesuai pulau',
    param: '-',
    query: '-',
  },
  {
    router: '{base_url}/city/prov',
    describe: 'Memuat lima data kota per halaman sesuai pulau',
    param: '-',
    query: 'prov : number, page : number',
  },
  {
    router: '{base_url}/city/isle/page',
    describe: 'Untuk mengetahui jumlah halaman data kota sesuai pulau',
    param: '-',
    query: '-',
  },
  {
    router: '{base_url}/city/isle',
    describe: 'Memuat lima data kota per halaman sesuai pulau',
    param: '-',
    query: 'island : string, page : number',
  },
  {
    router: '{base_url}/city/:id/map',
    describe: 'Untuk mengetahui koordinat geojson berdasarkan id kota',
    param: 'id : string',
    query: '-',
  },
  {
    router: '{base_url}/city/:id/destiny',
    describe: 'Untuk mengetahui daftar lokasi liburan berdasarkan id kota',
    param: 'id : string',
    query: '-',
  },
];

const codeData = [
  {
    prov_id: 11,
    regency_id: '1101 - 1118',
    city_id: '1171 - 1175',
    prov_name: 'Aceh',
    island: 'Sumatera',
  },
  {
    prov_id: 12,
    regency_id: '1201 - 1225',
    city_id: '1271 - 1278',
    prov_name: 'Sumatera Utara',
    island: 'Sumatera',
  },
  {
    prov_id: 13,
    regency_id: '1301 - 1312',
    city_id: '1371 - 1377',
    prov_name: 'Sumatera Barat',
    island: 'Sumatera',
  },
  {
    prov_id: 14,
    regency_id: '1401 - 1410',
    city_id: '1471 & 1473',
    prov_name: 'Riau',
    island: 'Sumatera',
  },
  {
    prov_id: 15,
    regency_id: '1501 - 1509',
    city_id: '1571 & 1572',
    prov_name: 'Jambi',
    island: 'Sumatera',
  },
  {
    prov_id: 16,
    regency_id: '1601 - 1613',
    city_id: '1671 - 1674',
    prov_name: 'Sumatera Selatan',
    island: 'Sumatera',
  },
  {
    prov_id: 17,
    regency_id: '1701 - 1709',
    city_id: '1771',
    prov_name: 'Bengkulu',
    island: 'Sumatera',
  },
  {
    prov_id: 18,
    regency_id: '1801 - 1813',
    city_id: '1871 & 1872',
    prov_name: 'Lampung',
    island: 'Sumatera',
  },
  {
    prov_id: 19,
    regency_id: '1901 - 1906',
    city_id: '1971',
    prov_name: 'Kepulauan Bangka Belitung',
    island: 'Sumatera',
  },
  {
    prov_id: 21,
    regency_id: '2101 - 2105',
    city_id: '2171 & 2172',
    prov_name: 'Kepulauan Riau',
    island: 'Sumatera',
  },
  {
    prov_id: 31,
    regency_id: '3101',
    city_id: '3171 - 3175',
    prov_name: 'DKI Jakarta',
    island: 'Jawa',
  },
  {
    prov_id: 32,
    regency_id: '3201 - 3218',
    city_id: '3271 - 3279',
    prov_name: 'Jawa Barat',
    island: 'Jawa',
  },
  {
    prov_id: 33,
    regency_id: '3301 - 3329',
    city_id: '3371 - 3376',
    prov_name: 'Jawa Tengah',
    island: 'Jawa',
  },
  {
    prov_id: 34,
    regency_id: '3401 - 3404',
    city_id: '3471',
    prov_name: 'DI Yogyakarta',
    island: 'Jawa',
  },
  {
    prov_id: 35,
    regency_id: '3501 - 3529',
    city_id: '3571 - 3579',
    prov_name: 'Jawa Timur',
    island: 'Jawa',
  },
  {
    prov_id: 36,
    regency_id: '3601 - 3604',
    city_id: '3671 - 3674',
    prov_name: 'Banten',
    island: 'Jawa',
  },
  {
    prov_id: 51,
    regency_id: '5101 - 5108',
    city_id: '5171',
    prov_name: 'Bali',
    island: 'BalNusra',
  },
  {
    prov_id: 52,
    regency_id: '5201 - 5208',
    city_id: '5271 & 5272',
    prov_name: 'Nusa Tenggara Barat',
    island: 'BalNusra',
  },
  {
    prov_id: 53,
    regency_id: '5301 - 5321',
    city_id: '5371',
    prov_name: 'Nusa Tenggara Timur',
    island: 'BalNusra',
  },
  {
    prov_id: 61,
    regency_id: '6101 - 6112',
    city_id: '6171 & 6172',
    prov_name: 'Kalimantan Barat',
    island: 'Kalimantan',
  },
  {
    prov_id: 62,
    regency_id: '6201 - 6213',
    city_id: '6271',
    prov_name: 'Kalimantan Tengah',
    island: 'Kalimantan',
  },
  {
    prov_id: 63,
    regency_id: '6301 - 6311',
    city_id: '6371 & 6372',
    prov_name: 'Kalimantan Selatan',
    island: 'Kalimantan',
  },
  {
    prov_id: 64,
    regency_id: '6401 - 6405, 6409, 6411',
    city_id: '6471, 6472, 6474',
    prov_name: 'Kalimantan Timur',
    island: 'Kalimantan',
  },
  {
    prov_id: 65,
    regency_id: '6501 - 6504',
    city_id: '6571',
    prov_name: 'Kalimantan Utara',
    island: 'Kalimantan',
  },
  {
    prov_id: 71,
    regency_id: '7101 - 7111',
    city_id: '7171 - 7174',
    prov_name: 'Sulawesi Utara',
    island: 'Sulawesi',
  },
  {
    prov_id: 72,
    regency_id: '7201 - 7212',
    city_id: '7271',
    prov_name: 'Sulawesi Tengah',
    island: 'Sulawesi',
  },
  {
    prov_id: 75,
    regency_id: '7501 - 7505',
    city_id: '7571',
    prov_name: 'Gorontalo',
    island: 'Sulawesi',
  },
  {
    prov_id: 76,
    regency_id: '7601 - 7606',
    city_id: '-',
    prov_name: 'Sulawesi Barat',
    island: 'Sulawesi',
  },
  {
    prov_id: 81,
    regency_id: '8101 - 8109',
    city_id: '8171 & 8172',
    prov_name: 'Maluku',
    island: 'Maluku',
  },
  {
    prov_id: 82,
    regency_id: '8201 - 8208',
    city_id: '8171 & 8172',
    prov_name: 'Maluku Utara',
    island: 'Maluku',
  },
  {
    prov_id: 91,
    regency_id: '9101 - 9112',
    city_id: '-',
    prov_name: 'Papua Barat',
    island: 'Papua',
  },
  {
    prov_id: 92,
    regency_id: '9401, 9413 - 9415',
    city_id: '-',
    prov_name: 'Papua Selatan',
    island: 'Papua',
  },
  {
    prov_id: 93,
    regency_id: '9404, 9410 - 9412, 9433 - 9436',
    city_id: '-',
    prov_name: 'Papua Tengah',
    island: 'Papua',
  },
  {
    prov_id: 94,
    regency_id: '9403, 9408 & 9409, 9419 & 9420, 9426 - 9428',
    city_id: '9471',
    prov_name: 'Papua',
    island: 'Papua',
  },
  {
    prov_id: 95,
    regency_id: '9402, 9416 - 9418, 9429 - 9432',
    city_id: '-',
    prov_name: 'Papua Pegunungan',
    island: 'Papua',
  },
  {
    prov_id: 96,
    regency_id: '9106 - 9110',
    city_id: '9171',
    prov_name: 'Papua Barat Daya',
    island: 'Papua',
  },
];

export { provRoute, cityRoute, codeData };