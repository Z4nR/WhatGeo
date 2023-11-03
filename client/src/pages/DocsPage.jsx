import { useEffect } from 'react';
import hljs from 'highlight.js';
import { codeData } from '../utils/docs-data';
import TableCode from '@/components/docs/TableCode';

export default function DocsPage() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="py-4 px-6">
      <TableCode data={codeData} />
      <div className="divider" />
      <iframe
        title="WhatGeo Documentation"
        src="https://zulham.ahlitani.com/geo/api-docs/"
        className=" w-full h-screen border-none overflow-scroll"
      />
    </div>
  );
}
