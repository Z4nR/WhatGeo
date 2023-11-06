import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { flattingData, loopingCode, saveData } from '@/utils/code-example';

export default function LoadAll() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="pt-4">
      <h1 className="text-lg font-bold">
        Menyatukan data map/page dalam 1 array
      </h1>
      <p className="py-2 text-justify">
        Untuk dapat memuat seluruh data map berdasarkan page query. Kita perlu
        mengetahui jumlah page menggunakan router{' '}
        <span className="badge badge-accent font-mono">/page</span> yang
        berfungsi untuk melaksanakan proses looping. Proses looping dilakukan
        dengan menjadikan jumlah halaman yang diperoleh menjadi batas maksimal
        nilai. Dalam proses looping, kita juga melakukan pengambilan data pada
        router dengan query yang membutuhkan nilai dari nomor page. Berikut
        contoh penulisan kode looping:
      </p>
      <div className="mockup-code md:w-fit xs:max-w-screen-sm pl-5">
        <pre>
          <code className="language-javascript">{loopingCode}</code>
        </pre>
      </div>
      <p className="py-2 text-justify">
        Dari proses looping tersebut kemudian lakukan push data ke dalam
        variable dengan nilai <b>[array]</b> .
      </p>
      <div className="mockup-code md:w-fit xs:max-w-screen-sm pl-5">
        <pre>
          <code className="language-javascript">{saveData}</code>
        </pre>
      </div>
      <p className="py-2 text-justify">
        Maka tampilan data yang tersimpan dalam variable data akan menjadi
        seperti ini{' '}
        <span className="badge badge-accent font-mono">
          [[data-1], [data-2], ..., [data-n]]
        </span>{' '}
        Kemudian lakukan proses penyatuan beberapa sub array dalam variable data
        menggunakan method <b>flat()</b> .
      </p>
      <div className="mockup-code md:w-fit xs:max-w-screen-sm pl-5">
        <pre>
          <code className="language-javascript">{flattingData}</code>
        </pre>
      </div>
      <div className="divider" />
    </div>
  );
}
