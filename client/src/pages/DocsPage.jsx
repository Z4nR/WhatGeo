import { useEffect } from 'react';
import hljs from 'highlight.js';
import { cityRoute, codeData, provRoute } from '../utils/docs-data';
import TableRoute from '@/components/docs/TableRoute';
import TableCode from '@/components/docs/TableCode';

export default function DocsPage() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="py-4 px-6">
      <TableCode data={codeData} />
      <div className="mockup-code xs:w-fit xs:max-w-screen-sm pl-5">
        <pre>
          <code className="language-javascript hjls">
            const base_url = `zulham.ahlitani.com/geo/v1`
          </code>
        </pre>
      </div>
      <div className="divider" />
      <h1 className="text-lg font-bold">Router Provinsi</h1>
      <TableRoute route={provRoute} />
      <div className="divider" />
      <h1 className="text-lg font-bold">Router Kota</h1>
      <TableRoute route={cityRoute} />
    </div>
  );
}