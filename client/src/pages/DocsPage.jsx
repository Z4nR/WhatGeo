import { codeData } from '../utils/docs-data';
import TableCode from '@/components/docs/TableCode';

export default function DocsPage() {
  return (
    <div className="py-4 px-6">
      <TableCode data={codeData} />
      <div className="divider" />
    </div>
  );
}
