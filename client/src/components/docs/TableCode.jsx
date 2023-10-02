export default function TableCode({ data }) {
  return (
    <>
      <div className="divider" />
      <h1 className="text-lg font-bold">Kode Data Provinsi dan Kab/Kota</h1>
      <div className="overflow-x-auto py-2">
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
                    <span className=" font-medium">Kode Kab :</span> <br />{" "}
                    {data.regency_id}
                  </div>
                  <div>
                    <span className=" font-medium">Kode Kota :</span> <br />{" "}
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
