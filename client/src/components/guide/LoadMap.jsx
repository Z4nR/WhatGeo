import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { loadMap } from '@/utils/code-guide';

export default function LoadMap() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="pt-4">
      <h1 className="text-lg font-bold">Memuat Data Peta</h1>
      <p className="py-2 text-justify">
        Supaya dapat menampilkan semua data yang telah dijadikan satu dalam
        sebuah array. Selanjutnya kita hanya perlu mencari properti object
        dengan key{' '}
        <span className="badge badge-accent font-mono">provFeature</span> untuk
        Data Provinsi dan{' '}
        <span className="badge badge-accent font-mono">cityFeature</span> untuk
        Data Kota/Kabupaten menggunakan array method <b>find()</b>. Lalu simpan
        data tersebut ke dalam variable dengan nilai <b>[array]</b>.
      </p>
      <div className="mockup-code md:w-fit xs:max-w-screen-sm pl-5">
        <pre>
          <code className="language-javascript">{loadMap}</code>
        </pre>
      </div>
      <div className="divider" />
    </div>
  );
}
