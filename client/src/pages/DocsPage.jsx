import { useEffect } from "react";
import hljs from "highlight.js";

export default function DocsPage() {
  const routeDesc = [
    {
      router: "prov/page",
      describe: "Untuk mengetahui jumlah halaman keseluruhan data provinsi",
      param: "-",
      query: "-",
    },
    {
      router: "prov?page={number}",
      describe: "Lorem Ipsum",
      param: "-",
      query: "number",
    },
  ];

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="py-4 px-6">
      <div className="mockup-code w-fit max-w-screen-sm pl-5">
        <pre>
          <code className="language-javascript hjls">
            base_url = zulham.ahlitani.com/geo/v1/
          </code>
        </pre>
      </div>
      <div className="divider" />
      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr>
              <th>Route</th>
              <th>Kegunaan</th>
              <th>Param</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            {routeDesc.map((data, index) => (
              <tr key={index}>
                <td>
                  <div className="badge badge-secondary w-fit">
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
    </div>
  );
}
