const provRoute = [
  {
    router: "{base_url}/prov/page",
    describe: "Untuk mengetahui jumlah halaman keseluruhan data provinsi",
    param: "-",
    query: "-",
  },
  {
    router: "{base_url}/prov",
    describe: "Memuat tiga data provinsi per halaman",
    param: "-",
    query: "page : number",
  },
  {
    router: "{base_url}/prov/isle/page",
    describe: "Untuk mengetahui jumlah halaman data provinsi sesuai pulau",
    param: "-",
    query: "-",
  },
  {
    router: "{base_url}/prov/isle",
    describe: "Memuat tiga data provinsi per halaman sesuai pulau",
    param: "-",
    query: "island : string, page : number",
  },
  {
    router: "{base_url}/prov/:id/map",
    describe: "Untuk mengetahui koordinat geojson berdasarkan id provinsi",
    param: "id : string",
    query: "-",
  },
  {
    router: "{base_url}/prov/:id/detail",
    describe: "Untuk mengetahui infomrasi singkat berdasarkan id provinsi",
    param: "id : string",
    query: "-",
  },
];

const cityRoute = [
  {
    router: "{base_url}/city/page",
    describe: "Untuk mengetahui jumlah halaman keseluruhan data kota",
    param: "-",
    query: "-",
  },
  {
    router: "{base_url}/city",
    describe: "Memuat lima data kota per halaman",
    param: "-",
    query: "page : number",
  },
  {
    router: "{base_url}/city/prov/page",
    describe: "Untuk mengetahui jumlah halaman data kota sesuai pulau",
    param: "-",
    query: "-",
  },
  {
    router: "{base_url}/city/prov",
    describe: "Memuat lima data kota per halaman sesuai pulau",
    param: "-",
    query: "prov : number, page : number",
  },
  {
    router: "{base_url}/city/isle/page",
    describe: "Untuk mengetahui jumlah halaman data kota sesuai pulau",
    param: "-",
    query: "-",
  },
  {
    router: "{base_url}/city/isle",
    describe: "Memuat lima data kota per halaman sesuai pulau",
    param: "-",
    query: "island : string, page : number",
  },
  {
    router: "{base_url}/city/:id/map",
    describe: "Untuk mengetahui koordinat geojson berdasarkan id kota",
    param: "id : string",
    query: "-",
  },
  {
    router: "{base_url}/city/:id/destiny",
    describe: "Untuk mengetahui daftar lokasi liburan berdasarkan id kota",
    param: "id : string",
    query: "-",
  },
];

const codeData = [
  {
    prov_id: 11,
    regency_id: "1101 - ",
    city_id: "1171 - ",
    prov_name: "Nangroe Aceh Darussalam",
    island: "Sumatera",
  },
];

export { provRoute, cityRoute, codeData };
