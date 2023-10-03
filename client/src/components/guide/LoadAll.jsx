import { useEffect } from "react";
import hljs from "highlight.js";

export default function LoadAll() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="pt-4">
      <h1 className="text-lg font-bold">
        Memuat data map berdasarkan page query
      </h1>
      <p className="py-2 text-justify">
        Untuk dapat memuat seluruh data map berdasarkan page query. Kita perlu
        mengetahui jumlah page menggunakan router{" "}
        <span className="badge badge-accent font-mono">/page</span> yang
        berfungsi untuk melaksanakan proses looping. Proses looping dilakukan
        dengan menjadikan jumlah halaman yang diperoleh menjadi batas maksimal
        nilai. Dalam proses looping, kita juga melakukan pengambilan data pada
        router dengan query yang membutuhkan nilai dari nomor page. Berikut
        contoh penulisan kode looping:
      </p>
      <div className="mockup-code md:w-fit xs:max-w-screen-sm pl-5">
        <pre>
          <code className="language-javascript hjls">Hallo</code>
        </pre>
      </div>
      <p className="py-2 text-justify">
        Dari proses looping tersebut kemudian lakukan push data kedalam variable
        dengan nilai array [] . Kemudian lakukan array.flat() untuk menjadikan
        sub array yang ada didalamnya menjadi sebuah array. Langkah terakhir
        ialah memanggil data yang diperlukan untuk ditampilkan di map.
      </p>
    </div>
  );
}
