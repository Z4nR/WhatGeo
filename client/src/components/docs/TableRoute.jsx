export default function TableRoute({ route }) {
  return (
    <>
      <div className="divider" />
      <h1 className="text-lg font-bold">Data Provinsi</h1>
      <div className="overflow-x-auto py-2">
        <table className="table table-md">
          <thead>
            <tr>
              <th>Route</th>
              <th>Kegunaan</th>
              <th>Param : Type</th>
              <th>Query : Type</th>
            </tr>
          </thead>
          <tbody>
            {route.map((data, index) => (
              <tr key={index}>
                <td>
                  <div className="badge badge-accent w-fit font-medium">
                    {data.router}
                  </div>
                </td>
                <td>{data.describe}</td>
                <td>{data.param}</td>
                <td>{data.query}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
