import { flattingData, loopingCode, saveData } from '@/utils/code-guide';
import { javascript } from '@codemirror/lang-javascript';
import ReactCodeMirror from '@uiw/react-codemirror';

export default function LoadAll() {
  return (
    <div className="pt-4">
      <h1 className="text-lg font-bold">
        Menyatukan Data Map/Page Dalam 1 Array
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
      <ReactCodeMirror
        className="flex justify-center"
        value={loopingCode}
        editable={false}
        basicSetup
        readOnly
        theme={'dark'}
        width="550px"
        extensions={[javascript({ jsx: true })]}
      />
      <p className="py-2 text-justify">
        Dari proses looping tersebut kemudian lakukan push data ke dalam
        variable dengan nilai <b>[array]</b> .
      </p>
      <ReactCodeMirror
        className="flex justify-center"
        value={saveData}
        editable={false}
        basicSetup
        readOnly
        theme={'dark'}
        width="550px"
        extensions={[javascript({ jsx: true })]}
      />
      <p className="py-2 text-justify">
        Maka tampilan data yang tersimpan dalam variable data akan menjadi
        seperti ini{' '}
        <span className="badge badge-accent font-mono">
          [[data-1], [data-2], ..., [data-n]]
        </span>{' '}
        Kemudian lakukan proses penyatuan beberapa sub array dalam variable data
        menggunakan method <b>flat()</b> .
      </p>
      <ReactCodeMirror
        className="flex justify-center"
        value={flattingData}
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
