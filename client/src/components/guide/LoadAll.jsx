import { useEffect } from "react";
import loadPage from "../../utils/code/loadMap/loadPage.js?raw";
import loopPage from "../../utils/code/loadMap/loopPage.js?raw";
import displayMap from "../../utils/code/loadMap/displayMap.js?raw";
import hljs from "highlight.js";

export default function LoadAll() {
  const loadAll = [
    {
      title: "Mengetahui jumlah halaman",
      description:
        "Untuk mengetahui jumlah halaman kalian dapat melakukan fetching data pada API dengan route berakhiran ( /page ) lalu simpan hasil fetching pada sebuah variable",
      step: loadPage,
    },
    {
      title: "Lakukan perulangan menggunakan variable page",
      description:
        "Setelah data didapatkan dan tersimpan pada variable page, lakukan perulangan menggunakan metode apapun dengan menggunakan variable page sebagai jumlah maksimal perulangan. Variable page juga digunakan untuk mengisi query data map berdasarkan kategori. Lalu lakukan perintah array.push kedalam variable data dengan value array.",
      step: loopPage,
    },
    {
      title: "Menyatukan data dan menggunakannya",
      description:
        "Data dari variable data akan memiliki bentuk seperti nested array. Untuk dapat menggunakan data tersebut langkah pertama yang perlu dilakukan ialah merubah nested array menjadi 1 array menggunakan Array.flat(). Setelah data dipastikan dalam 1 array tunggal kita tinggal melakukan mapping pada data tersebut untuk ditampilkan ke dalam peta yang sudah kita siapkan",
      step: displayMap,
    },
  ];

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="pt-4">
      <h1 className="text-xl font-bold">Memuat data peta</h1>
      <p className="pt-2 pb-4 text-justify">
        Hasil dari API yang dipanggil tidak berisikan seluruh data berdasarkan
        kategori yang dibutuhkan. Kita dapat menampilkan semua data peta
        tersebut dalam satu peta sekaligus. Untuk dapat memuat semua data
        koordinat peta kota maupun provinsi yang ada berdasarkan kategori yang
        dibutuhkan, terdapat beberapa tahapan yang harus dilakukan.
      </p>
      {loadAll.map((data, index) => (
        <div key={index} className="pb-8">
          <h2 className="text-lg font-medium">
            {index + 1}. {data.title}
          </h2>
          <p className="py-2 text-justify">{data.description}</p>
          <div className="mockup-code md:w-fit xs:max-w-screen-sm pl-5">
            <pre>
              <code className="language-javascript hjls">{data.step}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
