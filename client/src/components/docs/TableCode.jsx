export default function TableCode({ data }) {
  return (
    <>
      <h1 className="text-xl font-bold">Kode Data Provinsi dan Kab/Kota</h1>
      <h2 className="text-sm">
        *Untuk Kode Prov Id di Pulau Papua dibuat secara pribadi dan Kode City
        Id Kota di Pulau Papua terlihat acak dikarenakan belum adanya
        pemutakhiran kode terbaru
      </h2>
      <div className="overflow-x-auto pt-4 pb-2">
        <table className="table table-md text-center">
          <thead>
            <tr>
              <th>Prov Id</th>
              <th>City Id</th>
              <th>Provinsi</th>
              <th>Pulau</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data.prov_id}</td>
                <td>
                  <div className="pb-2">
                    <span className=" font-medium">Kode Kab :</span> <br />{' '}
                    {data.regency_id}
                  </div>
                  <div>
                    <span className=" font-medium">Kode Kota :</span> <br />{' '}
                    {data.city_id}
                  </div>
                </td>
                <td>{data.prov_name}</td>
                <td>{data.island}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
