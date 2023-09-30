export default function LoadAll() {
  const loadAll = [
    {
      title: "Mengetahui jumlah halaman",
      description:
        "Untuk mengetahui jumlah halaman kalian dapat melakukan fetching data pada API dengan route berakhiran ( /page ) lalu simpan hasil fetching pada sebuah variable",
      variable: "let page;",
      step: "axios.get(`zulham.ahlitani.com/geo/v1/prov/page`)",
      result:
        ".then((response) => { const data = response.data; return page = data; })",
    },
    {
      title: "Lakukan perulangan menggunakan variable page",
      description:
        "Setelah data didapatkan dan tersimpan pada variable page, lakukan perulangan menggunakan metode apapun dengan menggunakan variable page sebagai jumlah maksimal perulangan. Variable page juga digunakan untuk mengisi query data map berdasarkan kategori. Lalu lakukan perintah array.push kedalam variable data dengan value array.",
      variable: "let data = [];",
      step: "buat looping dengan i <= page, const result = axios.get(`zulham.ahlitani.com/geo/v1/prov?page={page}`)",
      result: "data.push(result)",
    },
    {
      title: "Menyatukan data dan menggunakannya",
      description:
        "Data dari variable data akan memiliki bentuk seperti nested array. Untuk dapat menggunakan data tersebut langkah pertama yang perlu dilakukan ialah merubah nested array menjadi 1 array menggunakan Array.flat(). Setelah data dipastikan dalam 1 array tunggal kita tinggal melakukan mapping pada data tersebut untuk ditampilkan ke dalam peta yang sudah kita siapkan",
      variable: "// format dari data ialah [[data1], [data2], ..., [data n]]",
      step: "const feature = data.flat()",
      result: "lakukan mapping terhadap variable feature",
    },
  ];

  return (
    <div className="py-4">
      <h1 className="text-xl font-bold">Memuat semua data peta</h1>
      <p className="pt-2 pb-4 text-justify">
        Hasil dari API yang dipanggil tidak berisikan seluruh data berdasarkan
        kategori yang dibutuhkan. Kita dapat menampilkan semua data peta
        tersebut dalam satu peta sekaligus. Untuk dapat memuat semua data
        koordinat peta kota maupun provinsi yang ada berdasarkan kategori yang
        dibutuhkan, terdapat beberapa tahapan yang harus dilakukan.
      </p>
      {loadAll.map((data, index) => (
        <div key={index}>
          <h2 className="text-lg font-medium">
            {index + 1}. {data.title}
          </h2>
          <p className="py-2 text-justify">{data.description}</p>
          <div className="pb-4">
            <div className="mockup-code bg-gray-300 text-gray-600">
              <pre>
                <code>{data.variable}</code>
              </pre>
              <pre>
                <code>{data.step}</code>
              </pre>
              <pre>
                <code>{data.result}</code>
              </pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}