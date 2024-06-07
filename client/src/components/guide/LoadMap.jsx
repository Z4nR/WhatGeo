import { loadMap } from '@/utils/code-guide';
import { javascript } from '@codemirror/lang-javascript';
import ReactCodeMirror from '@uiw/react-codemirror';

export default function LoadMap() {
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
      <ReactCodeMirror
        className="flex justify-center"
        value={loadMap}
        editable={false}
        basicSetup
        readOnly
        theme={'dark'}
        width="550px"
        extensions={[javascript({ jsx: true })]}
      />
      <div className="divider" />
    </div>
  );
}
